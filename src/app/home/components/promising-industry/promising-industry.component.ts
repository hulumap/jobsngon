import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
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
  industry: any =
    [
      {
        "name": "Kế toán",
        "id": 2
      },
      {
        "name": "Phiên dịch viên",
        "id": 3
      },
      {
        "name": "Kinh doanh/ Bán hàng",
        "id": 4
      },
      {
        "name": "Kỹ thuật cơ khí - điện",
        "id": 5
      },
      {
        "name": "QC - QA - ISO",
        "id": 6
      },
      {
        "name": "Quản lý sản xuất",
        "id": 7
      },
      {
        "name": "Xuất nhập khẩu",
        "id": 9
      },
      {
        "name": "HR - GA",
        "id": 11
      },
      {
        "name": "IT - Phần mềm",
        "id": 12
      },
      {
        "name": "IT - Phần cứng",
        "id": 13
      },
      {
        "name": "Hành chính thư ký",
        "id": 14
      },
      {
        "name": "Marketing",
        "id": 16
      },
      {
        "name": "Ngành ngề khác",
        "id": 60
      }
    ]

  currentSlide = 0;
  constructor() { }

  ngOnInit(): void {
  }


}
