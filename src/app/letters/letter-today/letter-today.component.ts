import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';
//import data from './../../../assets/data/data.json'
@Component({
  selector: 'app-letter-today',
  templateUrl: './letter-today.component.html',
  styleUrls: ['./letter-today.component.scss']
})
export class LetterTodayComponent implements OnInit {
  data: any
  quote: any = ""
  constructor(private router: Router, private jobsngon: Jobsngon) { }

  ngOnInit(): void {
    this.getDataJson()
  }

  getDataJson() {
    this.jobsngon.getJsonLetter()
      .then((value) => {
        this.data = value
        this.autoQuote()
      })
  }

  autoQuote() {
    // let a = 0
    // let b = 0
    let d = new Date();
    let a = d.getMonth()
    let b = d.getDate();
    switch (a) {
      case 0: return this.chackQuote(this.data.let0[b])
      case 1: return this.chackQuote(this.data.let1[b])
      case 2: return this.chackQuote(this.data.let2[b])
      case 3: return this.chackQuote(this.data.let3[b])
      case 4: return this.chackQuote(this.data.let4[b])
      case 5: return this.chackQuote(this.data.let5[b])
      case 6: return this.chackQuote(this.data.let6[b])
      case 7: return this.chackQuote(this.data.let7[b])
      case 8: return this.chackQuote(this.data.let8[b])
      case 9: return this.chackQuote(this.data.let9[b])
      case 10: return this.chackQuote(this.data.let10[b])
      case 11: return this.chackQuote(this.data.let11[b])
      case 12: return this.chackQuote(this.data.let12[b])
      case 13: return this.chackQuote(this.data.let13[b])
      case 14: return this.chackQuote(this.data.let14[b])
      case 15: return this.chackQuote(this.data.let15[b])
      case 16: return this.chackQuote(this.data.let16[b])
      case 17: return this.chackQuote(this.data.let17[b])
      case 18: return this.chackQuote(this.data.let18[b])
      case 19: return this.chackQuote(this.data.let19[b])
      default: this.chackQuote(this.data.let0[b])
    }

  }

  chackQuote(data) {
    this.quote = data
    let c = this.jobsngon.getData("hulu-love")
    let b = Math.floor(Math.random() * 14) + 1
    this.quote.img = 'assets/img/999/left/' + b + '.svg'
    for (let i in c) {
      if (c[i].id == this.quote.id) {
        this.quote.status = true
      }
    }
  }


}
