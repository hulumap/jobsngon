import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  user: any = ""
  constructor(private jobsngon: Jobsngon, private router: Router, private message: NzMessageService,) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) this.user = user
        else this.router.navigate([''])
      }, err => this.router.navigate(['']))
  }

  update() {
    this.jobsngon.updateInfo(this.user)
      .then(() => {
        this.message.create('success', 'Cập nhật thành công');
        this.jobsngon.setLocalData("user", this.user)
      }, err => {
        this.message.create('success', 'Cập nhật thất bại, vui lòng đăng nhập lại');
      })
  }

}
