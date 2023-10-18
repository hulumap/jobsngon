import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  company: any = []
  loading: boolean = false
  showJobs: any = []
  constructor(private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
    this.getCompany()
  }

  gotoJobDetail(company) {
    this.router.navigate(['/cong-ty', company.link]);
  }

  getCompany() {
    this.jobsngon.getJSON_Company()
      .then((data) => {
        this.loading = true
        this.company = data
       // console.log(this.company)
      }, err => {
        this.loading = true
        console.log(err)
      })
  }
}
