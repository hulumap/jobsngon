import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SubmitCvUserComponent } from '../up-cv/submit-cv-user/submit-cv-user.component';
import { MatDialog } from '@angular/material/dialog';
import { Jobsngon } from 'src/app/service/jobsngon.service';
import { SubmitCvComponent } from '../up-cv/submit-cv/submit-cv.component';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {
  @Input() job: any = {}
  @Input() visible: boolean = true
  @Output() hide: EventEmitter<any> = new EventEmitter()
  constructor(public dialog: MatDialog, public jobsngon: Jobsngon) { }
  user: any
  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) {
          this.user = user
        }
      }, err => {
        console.log(err)
      })
  }

  close(): void {
    this.visible = false;
    this.hide.emit(this.visible)
  }

  openUpcv() {
    let submit:any = this.user ? SubmitCvUserComponent : SubmitCvComponent
    const dialogRef = this.dialog.open(submit, {
      width: '40%',
      maxWidth: '100%',
      // height: '60%',
      data: this.job,
      //disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }


}
