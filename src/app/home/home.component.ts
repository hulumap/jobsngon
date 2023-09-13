import { Component, OnInit } from '@angular/core';
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
    private jobsngon: Jobsngon,
  ) { }

  ngOnInit(): void {
  }

}
