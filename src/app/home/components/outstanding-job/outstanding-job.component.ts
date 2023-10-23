import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-outstanding-job',
  templateUrl: './outstanding-job.component.html',
  styleUrls: ['./outstanding-job.component.scss']
})
export class OutstandingJobComponent implements OnInit {
  user: any = ""
  jobs: any = []
  showJobs: any = []
  currentPage = 1;
  pageSize = 12;
  totalPages: any = 0
  loading: boolean = false
  constructor(private jobsngon: Jobsngon, private router: Router, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) this.user = { ...user }
        this.getJobs()
      }, err => {
        console.log(err)
      })
  }

  getJobs() {
    this.jobsngon.getJSON_Jobs()
      .then((data) => {
        this.jobs = this.jobsngon.shuffleArray(data)
        this.totalPages = Math.ceil(this.jobs.length / this.pageSize);
        this.showJobs = this.filterJobsSaved()
        this.loading = true
      }, err => {
        this.loading = true
        console.log(err)
      })
  }

  filterJobsSaved() {
    // lọc id của jobs đã lưu
    let showJobs: any[] = []
    if (this.user) {
      const savedJobIds = this.user.jobs_saved.map(job => job.id);
      showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
        .map((item: any) => {
          item.saved = savedJobIds.includes(item.id);
          return { ...item };
        });

    } else {
      showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
    }
    return showJobs
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      this.showJobs = this.filterJobsSaved()
    }

  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.showJobs = this.filterJobsSaved()
    }
  }

  gotoJobDetail(job) {
    this.jobsngon.gotoJobDetail(job)
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

  gotoDetailCompany(company, event) {
    event.stopPropagation()
    this.router.navigate(['/cong-ty', company.link]);
  }

  saved(job, event) {
    event.stopPropagation()
    if (this.user) {
      if (!this.user.jobs_saved) {
        this.user.jobs_saved = []
      }
      this.user.jobs_saved.push(job)
      this.jobsngon.updateInfo({ jobs_saved: this.user.jobs_saved })
        .then(() => {
          job.saved = true
          this.message.create('success', 'Lưu thành công');
          this.jobsngon.setLocalData("user", this.user)
        }, err => {
          this.message.create('error', 'Lưu thất bại, vui lòng đăng nhập lại');
        })
    } else this.message.create('warning', 'Vui lòng đăng nhập');
  }

}