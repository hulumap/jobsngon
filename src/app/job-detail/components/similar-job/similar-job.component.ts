import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-similar-job',
  templateUrl: './similar-job.component.html',
  styleUrls: ['./similar-job.component.scss']
})
export class SimilarJobComponent implements OnInit {
  @Input() job_company: any = []
  showJobs: any = []
  currentPage = 1;
  pageSize = 4;
  totalPages: any = 0;
  loading: boolean = false
  constructor(private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
    if (this.job_company.jobs) {
      this.totalPages = Math.ceil(this.job_company.jobs.length / this.pageSize);
      this.showJobs = this.jobsngon.paginateArray(this.job_company.jobs, this.currentPage, this.pageSize)
      this.loading = true
    } else {
      this.jobsngon.getJSON_Company()
        .then((company) => {
          let data = company.filter(item => item.id == this.job_company.id)[0]
          if (data.jobs) {
            this.totalPages = Math.ceil(data.jobs.length / this.pageSize);
            this.showJobs = this.jobsngon.paginateArray(data.jobs, this.currentPage, this.pageSize)
          }
          this.loading = true
        })
    }
  }

  gotoJobDetail(job) {
    this.jobsngon.gotoJobDetail(job)
  }
}
