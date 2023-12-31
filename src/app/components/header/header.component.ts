import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isMobile: boolean = false
  public isLogin: boolean = false
  public user: any
  public title: any = ""
  constructor(private jobsngon: Jobsngon) {
  }




  ngOnInit(): void {
    this.checkLogin()
    this.showHelloUser()
    if (screen.width < 600) this.isMobile = true
  }
  openNtd() {
    window.open('https://khachhang.jobsngon.com/', "_blank")
  }


  hide() {
    if (this.isMobile) document.getElementById('menuMobile').click()
  }


  checkLogin() {
    this.jobsngon.onAuthStateChanged()
      .then((user: any) => {
        if (user) {
          this.user = user
          this.isLogin = true
        }
      })
  }

  /** Hiển thị lời chào theo thời gian */
  showHelloUser() {
    var today = new Date();
    var curHr = today.getHours();
    if (curHr < 12) {
      this.title = `Chào buổi sáng`;
    } else if (curHr < 18) {
      this.title = `Chào buổi chiều`;
    } else {
      this.title = `Chào buổi tối`;
    }
  }

  logout() {
    this.jobsngon.signOut()
      .then(() => {
        window.location.reload()
      })
  }
}
