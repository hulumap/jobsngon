import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';
import { ViewCvComponent } from '../view-cv/view-cv.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  user: any = {}
  showJobs: any = []
  currentPage = 1;
  pageSize = 5;
  totalPages: any = 0
  constructor(private jobsngon: Jobsngon, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) {
          this.user = user
          this.showJobs = this.jobsngon.sort_Date(this.user.jobs, 'asc')
        }
        else this.router.navigate([''])
      }, err => this.router.navigate(['']))
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      this.showJobs = this.jobsngon.paginateArray(this.user.jobs, this.currentPage, this.pageSize)
    }

  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.showJobs = this.jobsngon.paginateArray(this.user.jobs, this.currentPage, this.pageSize)
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

  openCv(link, event) {
    event.stopPropagation()
    const dialogRef = this.dialog.open(ViewCvComponent, {
      width: '90%',
      maxWidth: '100%',
      data: link,
      height: '90%',
      // data: item,
      //disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

}
