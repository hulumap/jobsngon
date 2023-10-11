import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';
import career from '../../assets/jobs/career.json'
import { SubmitCvUserComponent } from '../components/up-cv/submit-cv-user/submit-cv-user.component';
import { SubmitCvComponent } from '../components/up-cv/submit-cv/submit-cv.component';
@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  user: any
  exp: any = [{ link: 'chua-co-kinh-nghiem', name: "Chưa có kinh nghiệm" }, { link: 'duoi-1-nam', name: "Dưới 1 năm" }, { link: '1-nam', name: "1 năm" }, { link: '2-nam', name: "2 năm" }, { link: '3-nam', name: "3 năm" }, { link: '4-nam', name: "4 năm" }, { link: '5-nam', name: "5 năm" }, { link: 'tren-5-nam', name: "trên 5 năm" }]
  sex: any = [{ link: "nam", name: "Nam" }, { link: "nu", name: "Nữ" }, { link: "khong-yeu-cau", name: "Không yêu cầu" }]
  level: any = [{ link: 'nhan-vien', name: "Nhân viên" }, { link: 'truong-nhom', name: "Trưởng nhóm" }, { link: 'truong-pho-phong', name: "Trưởng/ Phó phòng" }, { link: 'quan-ly-giam-sat', name: "Quản lý/ Giám sát" }, { link: 'pho-giam-doc', name: "Phó giám đốc" }, { link: 'giam-doc', name: "Giám đốc" }, { link: 'thuc-tap-sinh', name: "Thực tập sinh" }]
  job: any = {}
  hide: boolean = false
  apply: any
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public jobsngon: Jobsngon
  ) { }

  ngOnInit(): void {
    this.getDetailJob()
  }

  getInfo() {
    this.apply = null
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) {
          this.user = user
          this.apply = this.user.jobs.filter(item => item.link == this.job.link)[0]
          console.log(this.apply)
        }
      }, err => {
        console.log(err)
      })
  }

  getDetailJob() {
    this.route.params.subscribe((routeParam) => {
      this.jobsngon.getJSON_Company()
        .then((company) => {
          this.jobsngon.getDetailJobs(routeParam.link)
            .then((data) => {
              data.company = company.filter(item => item.id == data.id_company)[0]
              data.level = this.level.filter(item => item.link == data.code_level)[0].name
              data.sex = this.sex.filter(item => item.link == data.code_sex)[0].name
              data.exp = this.exp.filter(item => item.link == data.code_exp)[0].name
              data.career = career.filter(item => item.link == data.code_career)[0].name
              this.job = data
              this.jobsngon.setTitle(this.job.name)
              this.hide = true
              this.getInfo()
            })
        })
    });
  }


  openUpcv() {
    let submit:any = this.user ? SubmitCvUserComponent : SubmitCvComponent
    const dialogRef = this.dialog.open(submit, {
      width: '40%',
      maxWidth: '100%',
      // height: '60%',
      data: this.job,
      //disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

}
