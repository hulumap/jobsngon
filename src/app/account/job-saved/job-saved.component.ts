import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-job-saved',
  templateUrl: './job-saved.component.html',
  styleUrls: ['./job-saved.component.scss']
})
export class JobSavedComponent implements OnInit {
  user: any = {}
  showJobs: any = []
  currentPage = 1;
  pageSize = 5;
  totalPages: any = 0
  constructor(private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) {
          this.user = user
          if (this.user.jobs_saved) {
            this.totalPages = Math.ceil(this.user.jobs_saved.length / this.pageSize);
            this.showJobs = this.jobsngon.paginateArray(this.user.jobs_saved, this.currentPage, this.pageSize)
          }
        }
        else this.router.navigate([''])
      }, err => this.router.navigate(['']))
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      this.showJobs = this.jobsngon.paginateArray(this.user.jobs_saved, this.currentPage, this.pageSize)
    }
  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.showJobs = this.jobsngon.paginateArray(this.user.jobs_saved, this.currentPage, this.pageSize)
    }
  }

  gotoJobDetail(job) {
    let url = this.router.serializeUrl(this.router.createUrlTree([`/viec-lam/${job.link}`]));
    window.open(url, '_blank');
  }

  gotoDetailCompany(company, event) {
    event.stopPropagation()
    this.router.navigate(['/cong-ty', company.link]);
  }
}
