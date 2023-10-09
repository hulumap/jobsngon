import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobsngon-help',
  templateUrl: './jobsngon-help.component.html',
  styleUrls: ['./jobsngon-help.component.scss']
})
export class JobsngonHelpComponent implements OnInit {
  items: any = [
    {
      title: "Headhunt – Đăng tin website",
      subtitle: "Đây giải pháp tối ưu chi phí tuyển dụng cho doanh nghiệp vừa và nhỏ",
      img: "/assets/icon/hunt.svg"
    },
    {
      title: "Tư vấn tận tình",
      subtitle: "Hỗ trợ cho ứng viên từ A đến Z, nhanh chóng tìm được việc làm trong mơ. Hỗ trợ triệt để đến lúc nhận việc",
      img: "/assets/icon/service.svg"
    },
    {
      title: "Tạo CV",
      subtitle: "Cung cấp nền tảng tạo CV đẹp, Profile chuyên nghiệp giúp bạn gây ấn tượng với nhà tuyển dụng",
      img: "/assets/icon/cv.svg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
