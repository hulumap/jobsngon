import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contract: any
  map: any = ''
  jobs: any = []

  constructor(
    private route: ActivatedRoute,
    private jobsngon: Jobsngon,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((routeParam) => {
      console.log("routeParam", routeParam)
    })
  }

}
