import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {
  title: any = "Đọc thư"
  constructor() { }

  ngOnInit(): void {
  }

  setTitle(title) {
    this.title = title
  }

}
