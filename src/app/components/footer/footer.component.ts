import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private jobsngon: Jobsngon, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  gotoJobsLang(value) {
    this.router.navigate(['/tim-viec-lam'], { queryParams: { lang: value } });
  }
  gotoJobsAddress(value) {
    this.router.navigate(['/tim-viec-lam'], { queryParams: { address: value } });
  }

}
