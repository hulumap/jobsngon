import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  getLastPath() {
    return this.location.path().split('/')[1];
  }
}
