import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {
  title: any = "Đọc thư"
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['doc-thu'])
  }

  setTitle(title) {
    this.title = title
  }

}
