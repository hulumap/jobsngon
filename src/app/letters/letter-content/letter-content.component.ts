import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';
//import data from './../../../assets/data/data.json'
@Component({
  selector: 'app-letter-content',
  templateUrl: './letter-content.component.html',
  styleUrls: ['./letter-content.component.scss']
})
export class LetterContentComponent implements OnInit {
  data: any
  carouselOptions = {
    items: 1, // Số lượng mục hiển thị trên mỗi slide
    loop: true, // Vòng lặp carousel
    margin: 10, // Khoảng cách giữa các mục
    //center: true,
    dots: true,
    responsive: {
      0: {
        items: 1 // Số lượng mục hiển thị cho màn hình nhỏ hơn 600px
      },
      600: {
        items: 1 // Số lượng mục hiển thị cho màn hình rộng hơn hoặc bằng 600px
      }
    }
  };
  char: any = []
  img: any = ''
  index: any
  constructor(private router: Router, private jobsngon: Jobsngon) {
    this.index = this.router.getCurrentNavigation().extras.state;
    //if (!this.index) this.router.navigate(['doc-thu'])
  }

  ngOnInit(): void {
    this.getDataJson()
  }

  getDataJson() {
    this.jobsngon.getJsonLetter()
      .then((value) => {
        this.data = value
        this.selectLetter(this.index)
      })
  }

  selectLetter(index) {
    switch (index) {
      case 0: return this.getData(this.data.let0)
      case 1: return this.getData(this.data.let1)
      case 2: return this.getData(this.data.let2)
      case 3: return this.getData(this.data.let3)
      case 4: return this.getData(this.data.let4)
      case 5: return this.getData(this.data.let5)
      case 6: return this.getData(this.data.let6)
      case 7: return this.getData(this.data.let7)
      case 8: return this.getData(this.data.let8)
      case 9: return this.getData(this.data.let9)
      case 10: return this.getData(this.data.let10)
      case 11: return this.getData(this.data.let11)
      case 12: return this.getData(this.data.let12)
      case 13: return this.getData(this.data.let13)
      case 14: return this.getData(this.data.let14)
      case 15: return this.getData(this.data.let15)
      case 16: return this.getData(this.data.let16)
      case 17: return this.getData(this.data.let17)
      case 18: return this.getData(this.data.let18)
      case 19: return this.getData(this.data.let19)
      default: this.getData(this.char)
    }
  }
  getData(data): any {
    let love = this.jobsngon.getData('hulu-love')
    this.char = data.map((item) => {
      let b = Math.floor(Math.random() * 19) + 1
      this.img = 'assets/img/999/left/' + b + '.svg'
      for (let i in love) {
        if (love) {
          if (item.id == love[i].id) {
            item.status = true
          }
        }
      }
      return { ...item, img: this.img }
    })
  }

  saveFavorite(data) {
    if (!data.status) {
      let a = { ...data }
      a.status = true
      this.jobsngon.addData("hulu-love", a)
      data.status = !data.status
    }
    else {
      this.jobsngon.deleteData("hulu-love", data.id)
      data.status = !data.status
    }
  }

}
