import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Jobsngon } from 'src/app/service/jobsngon.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { MatDialog } from '@angular/material/dialog';
import { ViewCvComponent } from '../view-cv/view-cv.component';
@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.scss']
})
export class ListCvComponent implements OnInit {
  user: any = {}
  loadingDown: boolean = false;
  data: any = [
    {
      name: 'Mẫu tiếng nhật chuẩn',
      path: 'thong-tin/thiet-ke/mau-1',
      img: "assets/cv/mau-1.jpg",
      type: 1
    },
    {
      name: 'Năng động, sáng tạo',
      path: 'thong-tin/thiet-ke/mau-2',
      img: "assets/cv/mau-2.jpg",
      type: 2
    },
    {
      name: 'Chuyên nghiệp',
      path: 'thong-tin/thiet-ke/mau-3',
      img: "assets/cv/mau-3.jpg",
      type: 2
    },
    {
      name: 'Đơn giản',
      path: 'thong-tin/thiet-ke/mau-4',
      img: "assets/cv/mau-4.jpg",
      type: 2
    },
    {
      name: 'Mạnh mẽ',
      path: 'thong-tin/thiet-ke/mau-5',
      img: "assets/cv/mau-5.jpg",
      type: 2
    },
    {
      name: 'Cao cấp',
      path: 'thong-tin/thiet-ke/mau-6',
      img: "assets/cv/mau-6.jpg",
      type: 2
    },
  ]
  constructor(private router: Router,
    private sanitizer: DomSanitizer,
    private jobsngon: Jobsngon,
    private message: NzMessageService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) {
          this.user = user
          this.user.cvs.sort((a, b) => (b.default ? 1 : -1) - (a.default ? 1 : -1));
         // console.log(this.user.cvs)
        }

        else this.router.navigate([''])
      }, err => this.router.navigate(['']))
  }

  gotoTemplate(path) {
    this.router.navigate([path])
  }

  selectFileDown(event) {
    let data_cv: any = {}
    const file = event.target.files.item(0);
    //console.log(event.target.files.item(0))
    data_cv.name = file.name
    data_cv.default = false
    let size = file.size
    if (size <= 500000) {
      this.loadingDown = true;
      this.jobsngon
        .uploadFile(file, `/cv-users-upload`)
        .then(
          (downloadURL) => {
            this.message.create('success', 'Tải CV thành công');
            this.loadingDown = false;
            data_cv.link = downloadURL
            if (!this.user.cvs) {
              this.user.cvs = []
            }
            this.user.cvs.push(data_cv)
            this.update()
            //this.jobsngon.deleteFile(this.user.cvs); // xóa file ban đầu đã chọn
          },
          (error) => {
            this.loadingDown = false;
            this.message.create('warning', 'Tải CV thất bại, vui lòng thử lại');
            console.log(error);
          }
        )
        .catch((err) => {
          this.loadingDown = false;
          this.message.create('warning', 'Tải CV thất bại, vui lòng thử lại');
          console.log(err);
        });
    } else this.message.create('warning', 'Tải file < 500Kb');
  }

  viewCVView() {

  }

  viewCV(item) {
    const dialogRef = this.dialog.open(ViewCvComponent, {
      width: '90%',
      maxWidth: '100%',
      data: item.link,
      height: '90%',
      // data: item,
      //disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

  deleteCV(index) {
    this.user.cvs.splice(index, 1);
    this.update()
  }

  setDefault(item) {
    // Đặt tất cả các đối tượng trong mảng có thuộc tính "default" thành false
    this.user.cvs.forEach(obj => obj.default = false);

    // Tìm đối tượng trong mảng có thuộc tính "name" và "ink" giống với đối tượng đầu vào,
    // và đặt thuộc tính "default" của đối tượng này thành true
    const matchingObject = this.user.cvs.find(obj => obj.name === item.name && obj.link === item.link);
    if (matchingObject) {
      matchingObject.default = true;
    }
    this.update()
    
  }

  changeCv() {
    document.getElementById("id_change_cv").click()
  }

  update() {
    this.jobsngon.updateInfo({ cvs: this.user.cvs })
      .then(() => {
        //this.message.create('success', 'Cập nhật thành công');
        this.jobsngon.setLocalData("user", this.user)
      }, err => {
        // this.message.create('success', 'Cập nhật thất bại, vui lòng đăng nhập lại');
      })
  }

}
