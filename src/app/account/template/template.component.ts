import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  data: any = [
    {
      name: 'Mẫu tiếng nhật chuẩn',
      path: 'thong-tin/cv/mau-1',
      img: "assets/cv/mau-1.jpg",
      type: 1
    },
    {
      name: 'Năng động, sáng tạo',
      path: 'thong-tin/cv/mau-2',
      img: "assets/cv/mau-2.jpg",
      type: 2
    },
    {
      name: 'Chuyên nghiệp',
      path: 'thong-tin/cv/mau-3',
      img: "assets/cv/mau-3.jpg",
      type: 2
    },
    {
      name: 'Đơn giản',
      path: 'thong-tin/cv/mau-4',
      img: "assets/cv/mau-4.jpg",
      type: 2
    },
    {
      name: 'Mạnh mẽ',
      path: 'thong-tin/cv/mau-5',
      img: "assets/cv/mau-5.jpg",
      type: 2
    },
    {
      name: 'Cao cấp',
      path: 'thong-tin/cv/mau-6',
      img: "assets/cv/mau-6.jpg",
      type: 2
    },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoTemplate(path) {
    this.router.navigate([path])
  }





}
