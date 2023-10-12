import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';

@Component({
  selector: 'app-detail-company',
  templateUrl: './detail-company.component.html',
  styleUrls: ['./detail-company.component.scss']
})
export class DetailCompanyComponent implements OnInit {
  isMobile: boolean = false
  showJobs: any = []
  company: any = {}
  hide: boolean = false
  currentPage = 1;
  pageSize = 8;
  totalPages: any = 0
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public jobsngon: Jobsngon,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDetailCompany()
    if (screen.width < 600) this.isMobile = true
  }

  getDetailCompany() {
    this.route.params.subscribe((routeParam) => {
      this.jobsngon.getJSON_Company()
        .then((company) => {
          this.company = company.filter((item) => item.link == routeParam.link)[0]
          this.totalPages = Math.ceil((this.company.jobs ? this.company.jobs.length : 0) / this.pageSize);
          this.showJobs = this.jobsngon.paginateArray(this.company.jobs ? this.company.jobs : [], this.currentPage, this.pageSize)
          this.hide = true
        })
    });
  }

  gotoJobDetail(job) {
    let url = this.router.serializeUrl(this.router.createUrlTree([`/viec-lam/${job.link}`]));
    window.open(url, '_blank');
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      this.showJobs = this.jobsngon.paginateArray(this.company.jobs, this.currentPage, this.pageSize)
    }

  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.showJobs = this.jobsngon.paginateArray(this.company.jobs, this.currentPage, this.pageSize)
    }
  }
  /// xem draer chi tiết jobs //
  visible = false;
  job: any = {}
  openJob(item, event): void {
    let data = { ...item }
    data.company = this.company
    event.stopPropagation()
    this.visible = true;
    this.job = data
  }
  close(event): void {
    this.visible = event;
  }
}
