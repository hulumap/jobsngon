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
  file_cv: any = "A"
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
        if (user) this.user = user
        // else this.router.navigate([''])
      }, err => {

      })
  }
  submit() {

  }
  changeCv() {

  }

}
