import { Component, OnInit } from '@angular/core';
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
  company: any = [
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 1",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png",
        number: 10
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 2",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 3",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 4",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 5",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 6",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
  ]

  constructor(private jobsngon: Jobsngon) { }

  ngOnInit(): void {
  }


}
