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
      img: "https://freec.asia/_next/image?url=%2F_next%2Fstatic%2Fimage%2F_%2F_%2Fpackages%2Foptimal-page%2Fwrapper%2Fhome%2Fassets%2Fimg%2FEducationTraining.66306d9baec74b836bfe120af49308a0.webp&w=48&q=75"
    },
    {
      title: "Tư vấn tận tình",
      subtitle: "Hỗ trợ cho ứng viên từ A đến Z, nhanh chóng tìm được việc làm trong mơ. Hỗ trợ triệt để đến lúc nhận việc",
      img: "https://freec.asia/_next/image?url=%2F_next%2Fstatic%2Fimage%2F_%2F_%2Fpackages%2Foptimal-page%2Fwrapper%2Fhome%2Fassets%2Fimg%2FEducationTraining.66306d9baec74b836bfe120af49308a0.webp&w=48&q=75"
    },
    {
      title: "Tạo CV",
      subtitle: "Cung cấp nền tảng tạo CV đẹp, Profile chuyên nghiệp giúp bạn gây ấn tượng với nhà tuyển dụng",
      img: "https://freec.asia/_next/image?url=%2F_next%2Fstatic%2Fimage%2F_%2F_%2Fpackages%2Foptimal-page%2Fwrapper%2Fhome%2Fassets%2Fimg%2FEducationTraining.66306d9baec74b836bfe120af49308a0.webp&w=48&q=75"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
