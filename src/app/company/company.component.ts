import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  jobs: any = [
    {
      name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
      logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png",
      address: "TPHCM",
      size: "300 nhân viên",
    },
    {
      name: "CÔNG TY TNHH JOBS NGON VIỆT NAM CÔNG TY TNHH JOBS NGON VIỆT NAM",
      logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png",
      address: "TPHCM",
      size: "300 nhân viên",
    },
    {
      name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
      logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png",
      address: "TPHCM",
      size: "300 nhân viên",
    },
    {
      name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
      logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png",
      address: "TPHCM",
      size: "300 nhân viên",
    },
    {
      name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
      logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png",
      address: "TPHCM",
      size: "300 nhân viên",
    },
  ]

  showJobs: any = []
  constructor(private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
  }

  gotoJobDetail(job) {
    this.router.navigate(['/viec-lam', job.name]);
  }

}
