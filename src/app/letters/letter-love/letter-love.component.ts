import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-letter-love',
  templateUrl: './letter-love.component.html',
  styleUrls: ['./letter-love.component.scss']
})
export class LetterLoveComponent implements OnInit {
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
  constructor(private router: Router, private jobsngon: Jobsngon) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(): any {
    let love = this.jobsngon.getData('hulu-love')
    this.char = love.map((item) => {
      let b = Math.floor(Math.random() * 19) + 1
      this.img = 'assets/img/999/left/' + b + '.svg'
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
