import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-top-hiring-company',
  templateUrl: './top-hiring-company.component.html',
  styleUrls: ['./top-hiring-company.component.scss']
})
export class TopHiringCompanyComponent implements OnInit {
  currentSlide = 0;
  carouselOptions = {
    items: 6, // Số lượng mục hiển thị trên mỗi slide
    loop: true, // Vòng lặp carousel
    //margin: 10, // Khoảng cách giữa các mục
    responsive: {
      0: {
        items: 2 // Số lượng mục hiển thị cho màn hình nhỏ hơn 600px
      },
      600: {
        items: 6 // Số lượng mục hiển thị cho màn hình rộng hơn hoặc bằng 600px
      }
    }
  };
  company: any = []

  constructor(private jobsngon: Jobsngon, private router: Router) { }

  ngOnInit(): void {
    this.getCompany()
  }

  getCompany() {
    this.jobsngon.getJSON_Company()
      .then((data) => {
        console.log(data)
        this.company = data
      }, err => console.log(err))
  }

  gotoCompanyDetail(company) {
    this.router.navigate(['/cong-ty', company.link]);
  }


}
