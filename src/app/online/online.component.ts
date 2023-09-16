import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.scss']
})
export class OnlineComponent implements OnInit {
  id: any = ''
  index: any = "" // bắt ẩn hiên CV online theo số 1---->
  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id
      this.index = params.id.substring(params.id.length - 1)
    });
  }

  ngOnInit(): void {

  }

}
