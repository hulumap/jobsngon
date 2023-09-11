import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import {Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  loading: boolean = false;
  constructor(
    private hulu: Jobsngon,
    private router: Router,
    private ngZone: NgZone,
    private message: NzMessageService,
  ) { }

  ngOnInit(): void { }

  tryRegister(value) {
    // this.loading = true;
    // if (value.password == value.cpassword) {
    //   this.partner.signUpWithEmail(value).then(() => {
    //     this.message.create('success', "Đăng ký thành công");
    //     this.partner.signInWithEmail(value.email, value.password).then(() => {
    //       this.navigate()
    //     }, err => {
    //       this.loading = false
    //       this.message.create('error', err)
    //     })
    //   }, err => {
    //     this.loading = false
    //     this.message.create('error', err)
    //   })
    // } else {
    //   this.loading = false
    //   this.message.create('error', "Xác nhận sai mật khẩu");
    // }
  }

  public registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    cpassword: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })

  signinGoogle() {
    // this.partner.signInWithGoogle().then(() => {
    //   this.navigate()
    // })
  }
  navigate() {
    this.ngZone.run(() => {
      this.loading = false
      this.router.navigate([''])
    })
  }

}
