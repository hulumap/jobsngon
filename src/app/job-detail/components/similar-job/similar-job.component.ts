import { Component, OnInit } from '@angular/core';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-similar-job',
  templateUrl: './similar-job.component.html',
  styleUrls: ['./similar-job.component.scss']
})
export class SimilarJobComponent implements OnInit {

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
  constructor(private jobsngon: Jobsngon) { }

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.jobs.length / this.pageSize);
    this.showJobs = this.jobsngon.paginateArray(this.jobs, this.currentPage, this.pageSize)
    console.log(this.totalPages)
  }
}
