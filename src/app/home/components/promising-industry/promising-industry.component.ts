import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promising-industry',
  templateUrl: './promising-industry.component.html',
  styleUrls: ['./promising-industry.component.scss']
})
export class PromisingIndustryComponent implements OnInit {
  products = [
    { id: 1, name: 'Sản phẩm 1', description: 'Mô tả sản phẩm 1', imageUrl: 'product1.jpg' },
    { id: 2, name: 'Sản phẩm 2', description: 'Mô tả sản phẩm 2', imageUrl: 'product2.jpg' },
    // Thêm sản phẩm khác nếu cần
  ];

  currentSlide = 0;
  constructor() { }

  ngOnInit(): void {
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.products.length - 1) {
      this.currentSlide++;
    }
  }

}
