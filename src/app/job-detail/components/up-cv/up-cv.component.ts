import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-up-cv',
  templateUrl: './up-cv.component.html',
  styleUrls: ['./up-cv.component.scss']
})
export class UpCvComponent implements OnInit {
  file_cv: any
  user: any = ""
  constructor(
    private jobsngon: Jobsngon,
    private router: Router,
    private message: NzMessageService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<UpCvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) {
          this.user = user
          this.file_cv = this.user.cvs.filter(item => item.default)[0]
          this.user.cvs.sort((a, b) => (b.default ? 1 : -1) - (a.default ? 1 : -1));
        }
      }, err => {
        console.log(err)
      })
  }
  submit() {
    let cv = {
      name: this.user.name,
      email: this.user.email,
      phone: this.user.phone ? this.user.phone : "",
      type: 5,
      date_created: new Date(),
      file_down: this.file_cv.link,
      uid_customer: this.data.uid_customer ? this.data.uid_customer : this.data.id_company
    }
    let company = {
      name: this.data.company.name,
      logo: this.data.company.logo,
      link: this.data.company.link
    }
    let job: any = { ...this.data }
      job.file_down = this.file_cv.link,
      job.date_created = new Date(),
      job.company = company
    if (!this.user.jobs) {
      this.user.jobs = []
    }
    this.user.jobs.push(job)
    console.log(cv, this.user.jobs)
    this.jobsngon.applyCv(cv, this.user.jobs)
      .then(() => {
        console.log("ok")
      }, err=> {
        
      })

  }
  changeCv() {

  }

  // selectCV(event) {
  //   console.log(this.file_cv)
  //   this.user.cvs = this.user.cvs.map((item) => {
  //     item.default = item === event;
  //     return item;
  //   });
  // }

}
