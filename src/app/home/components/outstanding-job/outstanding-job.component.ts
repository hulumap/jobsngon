import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-outstanding-job',
  templateUrl: './outstanding-job.component.html',
  styleUrls: ['./outstanding-job.component.scss']
})
export class OutstandingJobComponent implements OnInit {
  jobs: any = []
  showJobs: any = []
  currentPage = 1;
  pageSize = 12;
  totalPages: any = 0
  constructor(private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
    this.getJobs()
  }


  getJobs() {
    this.jobsngon.getJSON_Jobs()
      .then((data) => {
        this.jobs = data
        this.totalPages = Math.ceil(this.jobs.length / this.pageSize);
        this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
      }, err => console.log(err))
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
    }

  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
    }
  }

  gotoJobDetail(job) {
    let url = this.router.serializeUrl(this.router.createUrlTree([`/viec-lam/${job.link}`]));
    window.open(url, '_blank');
  }
  /// xem draer chi tiết jobs //
  visible = false;
  job: any = {}
  openJob(item, event): void {
    event.stopPropagation()
    this.visible = true;
    this.job = item
  }

  close(event): void {
    this.visible = event;
  }

}