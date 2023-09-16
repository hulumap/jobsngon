import { Component, NgZone } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Jobsngon } from 'src/app/service/jobsngon.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  loading: boolean = false;
  passwordVisible = false;
  constructor(
    private jobsngon: Jobsngon,
    private router: Router,
    private ngZone: NgZone,
    private message: NzMessageService,
    public dialog: MatDialog
  ) { }

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  public checkKey(event) {
    if (event.keyCode == 13 && this.loginForm.valid)
      this.tryLogin(this.loginForm.value);
  }

  tryLogin(value) {
    // this.loading = true;
    // this.partner.signInWithEmail(value.email, value.password).then(
    //   (user) => {
    //     this.navigate();
    //   },
    //   (err) => {
    //     this.loading = false;
    //     this.message.error(err);
    //   }
    // );
  }

  signinGoogle() {
    this.jobsngon.signInWithGoogle().then((user) => {
      this.navigate();
    }, err => console.log(err));
  }
  navigate() {
    this.ngZone.run(() => {
      this.router.navigate(['']).then(() => {
        this.loading = false;
        window.location.reload()
      });
    });
  }
}
