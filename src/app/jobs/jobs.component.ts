import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';
import address from '../../assets/jobs/address.json'
import lang from '../../assets/jobs/lang.json'
import career from '../../assets/jobs/career.json'
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  exp: any = [{ id: 0, name: "Chưa có kinh nghiệm" }, { id: 1, name: "Dưới 1 năm" }, { id: 2, name: "1 năm" }, { id: 3, name: "2 năm" }, { id: 4, name: "3 năm" }, { id: 4, name: "4 năm" }, { id: 5, name: "5 năm" }, { id: 6, name: "trên 5 năm" }]
  type_exp: any = 'all'
  sex: any = [{ id: 1, name: "Nam" }, { id: 2, name: "Nữ" }, { id: 3, name: "Khác" }]
  type_sex: any = "all"
  lang: any = lang
  type_lang: any = "all"
  level: any = [{ id: 0, name: "Nhân viên" }, { id: 1, name: "Truỏng nhóm" }, { id: 2, name: "Trưởng/ Phó phòng" }, { id: 3, name: "Quản lý/ Giám sát" }, { id: 4, name: "Phó giám đốc" }, { id: 5, name: "Giám đốc" }, { id: 6, name: "Thực tập sinh" }]
  type_level: any = 'all'
  address: any = address
  type_address: any = 'all'
  career: any = career
  type_career: any = 'all'
  searchKey: string = ""
  jobs: any = [
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 1",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
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
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 7",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 8",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 9",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 10",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 11",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    },
    {
      name: "NHÂN VIÊN NHÂN SỰ TỔNG VỤ 12",
      company: {
        name: "CÔNG TY TNHH JOBS NGON VIỆT NAM",
        logo: "https://jobsngon.com/wp-content/uploads/2022/10/jobsngon-300x300.png"
      },
      address: "Quận Bình Thạnh, TPHCM",
      salary: " 15 – 20 mil VND"
    }
  ]

  showJobs: any = []
  currentPage = 1;
  pageSize = 4;
  totalPages: any = 0
  constructor(private jobsngon: Jobsngon, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.key != "") this.searchKey = params.key
        if (params.page) this.currentPage = parseInt(params.page)
        if (params.lang) this.type_lang = this.lang.find(item => item.link == params.lang).id
        if (params.address) this.type_address = this.address.find(item => item.link == params.address).id
        if (params.career) this.type_career = this.career.find(item => item.link == params.career).id
      }
    });
  }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.jobs.length / this.pageSize);
    this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)

  }

  gotoJobDetail(job) {
    this.router.navigate(['/viec-lam', job.name]);
  }
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      this.router.navigate(['/tim-viec-lam'], { queryParams: { key: this.searchKey, page: this.currentPage } });
      this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
    }

  }


  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      this.router.navigate(['/tim-viec-lam'], { queryParams: { key: this.searchKey, page: this.currentPage } });
      this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
    }
  }


  search() {
    this.router.navigate(['/tim-viec-lam'])
    this.showJobs = this.jobsngon.paginateArray(this.jobs, 1, 10)
  }

}
