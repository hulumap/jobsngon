import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {
  loadingDown: boolean = false;
  data: any = [
    {
      name: 'Mẫu tiếng nhật chuẩn',
      path: 'tai-khoan/thiet-ke/mau-1',
      img: "assets/cv/mau-1.jpg",
      type: 1
    },
    {
      name: 'Năng động, sáng tạo',
      path: 'tai-khoan/thiet-ke/mau-2',
      img: "assets/cv/mau-2.jpg",
      type: 2
    },
    {
      name: 'Chuyên nghiệp',
      path: 'tai-khoan/thiet-ke/mau-3',
      img: "assets/cv/mau-3.jpg",
      type: 2
    },
    {
      name: 'Đơn giản',
      path: 'tai-khoan/thiet-ke/mau-4',
      img: "assets/cv/mau-4.jpg",
      type: 2
    },
    {
      name: 'Mạnh mẽ',
      path: 'tai-khoan/thiet-ke/mau-5',
      img: "assets/cv/mau-5.jpg",
      type: 2
    },
    {
      name: 'Cao cấp',
      path: 'tai-khoan/thiet-ke/mau-6',
      img: "assets/cv/mau-6.jpg",
      type: 2
    },
  ]
  cv: any = []
  a: any = "https://firebasestorage.googleapis.com/v0/b/jobsngon-a8d52.appspot.com/o/cv-partner%2FLA%20CAM%20LOAN.pdf69bf?alt=media&token=e77d41cb-f077-4f1b-9a7e-a8c3a556bc6e"
  file_cv: any = "https://firebasestorage.googleapis.com/v0/b/jobsngon-a8d52.appspot.com/o/cv-partner%2FLA%20CAM%20LOAN.pdf69bf?alt=media&token=e77d41cb-f077-4f1b-9a7e-a8c3a556bc6e"
  constructor(private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.cv = this.data
    this.file_cv = this.sanitizer.bypassSecurityTrustResourceUrl(this.a)
    console.log(this.file_cv)
  }

  gotoTemplate(path) {
    this.router.navigate([path])
  }

  selectFileDown(event) {

  }

  viewCVView() {

  }

  changeCv() {
    document.getElementById("id_change_cv").click()
  }

}
