import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private jobsngon: Jobsngon,
    private router: Router,
  ) {
    this.checkLogin()
  }

  checkLogin() {
    this.jobsngon.onAuthStateChanged()
      .then((user) => {
        if (user) this.router.navigate([''])
      })
  }
}
