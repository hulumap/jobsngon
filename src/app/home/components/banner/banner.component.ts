import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  searchKey: string = ""
  constructor(private jobsngon: Jobsngon, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  search() {
    this.router.navigate(['/tim-viec-lam'], { queryParams: { key: this.searchKey } });
  }

  public checkKey(event) {
    if (event.keyCode == 13) this.search()
  }

}
