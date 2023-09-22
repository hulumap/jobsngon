import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Jobsngon } from 'src/app/service/jobsngon.service';
import career from '../../../../assets/jobs/career.json'
@Component({
  selector: 'app-promising-industry',
  templateUrl: './promising-industry.component.html',
  styleUrls: ['./promising-industry.component.scss']
})
export class PromisingIndustryComponent implements OnInit {
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
  industry: Array<any> = career

  currentSlide = 0;
  constructor(private jobsngon: Jobsngon, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  gotoDetail(value) {
    this.router.navigate(['/tim-viec-lam'], { queryParams: { career: value } });
  }


}
