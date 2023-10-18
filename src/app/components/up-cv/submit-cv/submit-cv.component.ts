import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-submit-cv',
  templateUrl: './submit-cv.component.html',
  styleUrls: ['./submit-cv.component.scss']
})
export class SubmitCvComponent implements OnInit {
  show_file: any = ""
  user: any = {
    name: "",
    email: "",
    phone: "",
    type: 5,
    salary_expect: "",
    file_down: "",
    date_work: new Date(),
    date_created: new Date(),
    uid_customer: this.data.uid_customer ? this.data.uid_customer : this.data.id_company
  }
  constructor(
    private jobsngon: Jobsngon,
    private router: Router,
    private message: NzMessageService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SubmitCvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  submit() {
    let cv = { ...this.user }
    cv.date_work = new Date(this.user.date_work)
    if (cv.name == "" || cv.phone == "" || cv.email == "" || cv.file_down == "") this.message.create('warning', 'Vui lòng nhập đầy đủ thông tin');
    else {
      //console.log(cv)
      this.jobsngon.addCV(cv)
        .then(() => {
          this.message.create('success', 'Đã apply thành công!');
          this.dialogRef.close()
        }, err => {
          this.message.create('warning', 'Apply thất bại, vui lòng thử lại');
        })
    }
  }
  changeCv() {
    document.getElementById("id_change_cv_up").click()
  }

  loadingDown: boolean = false
  selectFileDown(event) {
    const file = event.target.files.item(0);
    this.show_file = file.name
    let size = file.size
    if (size <= 500000) {
      this.loadingDown = true;
      this.jobsngon
        .uploadFile(file, `/cv-users-upload`)
        .then(
          (downloadURL) => {
            this.message.create('success', 'Tải CV thành công');
            this.loadingDown = false;
            this.user.file_down = downloadURL
          },
          (error) => {
            this.loadingDown = false;
            this.message.create('warning', 'Tải CV thất bại, vui lòng thử lại');
            console.log(error);
          }
        )
        .catch((err) => {
          this.loadingDown = false;
          this.message.create('warning', 'Tải CV thất bại, vui lòng thử lại');
          console.log(err);
        });
    } else this.message.create('warning', 'Tải file < 500Kb');
  }

}
