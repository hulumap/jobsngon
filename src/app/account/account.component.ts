import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  getLastPath(){
    return this.location.path()
  }

}
