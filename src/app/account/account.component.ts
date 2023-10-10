import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Jobsngon } from '../service/jobsngon.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private location: Location, private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
  }

  getLastPath() {
    return this.location.path()
  }

  logout() {
    this.jobsngon.signOut()
      .then(() => {
        this.router.navigate(['']).then(() => window.location.reload())

      })
  }

}
