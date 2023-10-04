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
  sex: any = [{ id: 1, name: "Nam" }, { id: 2, name: "Nữ" }, { id: 3, name: "Khác" }]
  lang: any = lang
  level: any = [{ id: 0, name: "Nhân viên" }, { id: 1, name: "Truỏng nhóm" }, { id: 2, name: "Trưởng/ Phó phòng" }, { id: 3, name: "Quản lý/ Giám sát" }, { id: 4, name: "Phó giám đốc" }, { id: 5, name: "Giám đốc" }, { id: 6, name: "Thực tập sinh" }]
  address: any = address
  career: any = career
  jobs: any = []
  filter: any = {
    name: "",
    code_exp: "all",
    code_level: "all",
    code_address: 'all',
    code_career: "all",
    code_sex: "all",
    code_lang: "all"
  }
  showJobs: any = []
  currentPage = 1;
  pageSize = 25;
  totalPages: any = 0
  loading: boolean = false
  constructor(private jobsngon: Jobsngon, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.key) this.filter.name = params.key
        if (params.page) this.currentPage = parseInt(params.page)
        if (params.lang) this.filter.code_lang = this.lang.find(item => item.link == params.lang).id
        if (params.address) this.filter.code_address = this.address.find(item => item.link == params.address).link
        if (params.career) this.filter.code_career = this.career.find(item => item.link == params.career).link
      }
    });
  }

  ngOnInit(): void {
    this.getJobs()
  }

  getJobs() {
    this.jobsngon.getJSON_Jobs()
      .then((data) => {
        this.jobs = data
        let jobsFilter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
        this.totalPages = Math.ceil(jobsFilter.length / this.pageSize);
        this.showJobs = this.jobsngon.paginateArray(jobsFilter, this.currentPage, this.pageSize)
        this.loading = true
      }, err => {
        this.loading = true
        console.log(err)
      })
  }


  // Hàm để lọc các công việc dựa trên nhiều trường, bao gồm cả trường "name"
  filterJobs(filters: Partial<any>): any[] {
    return this.jobs.filter((job) => {
      // Duyệt qua từng trường trong filters
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          const filterValue = filters[key];
          const jobValue = job[key];

          // Kiểm tra xem "name" có tồn tại và không rỗng
          if (filters.name !== undefined && filters.name !== "") {
            const filterName = this.jobsngon.changeAlias(filters.name);
            const jobName = this.jobsngon.changeAlias(job.name);

            if (!jobName.includes(filterName)) {
              return false; // Không khớp, loại bỏ công việc này
            }
          }
          else {
            if (typeof filterValue === 'string' && typeof jobValue === 'string') {
              if (!jobValue.toLowerCase().includes(filterValue.toLowerCase())) {
                return false; // Không khớp, loại bỏ công việc này
              }
            } else if (filterValue !== jobValue) {
              return false; // Không khớp, loại bỏ công việc này
            }
          }
        }
      }

      // Nếu tất cả các trường đều khớp, giữ lại công việc này
      return true;
    });
  }


  removeFieldsWithAllValue(filter: any): any {
    const filteredFilter = { ...filter };
    for (const key in filteredFilter) {
      if (filteredFilter.hasOwnProperty(key) && filteredFilter[key] === "all") {
        delete filteredFilter[key];
      }
    }
    return filteredFilter;
  }

  gotoJobDetail(job) {
    let url = this.router.serializeUrl(this.router.createUrlTree([`/viec-lam/${job.link}`]));
    window.open(url, '_blank');
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      let filter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
      console.log(this.filter, filter)
      let param = {
        page: this.currentPage,
        // address: this.address.find(item => item.link == this.filter.code_address).link
      }
      this.router.navigate(['/tim-viec-lam'], { queryParams: param });
      this.showJobs = this.jobsngon.paginateArray(filter, this.currentPage, this.pageSize)
    }
  }


  // cập nhật lại link là id luôn, cho dễ code

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      let filter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
      console.log(this.removeFieldsWithAllValue(this.filter))
      let param = {
        page: this.currentPage,
        //address: this.address.find(item => item.link == this.filter.code_address).link
      }
      this.router.navigate(['/tim-viec-lam'], { queryParams: param });
      this.showJobs = this.jobsngon.paginateArray(filter, this.currentPage, this.pageSize)
    }
  }

  public checkKey(event) {
    if (event.keyCode == 13) this.search()
  }


  search() {
    this.jobsngon.getJSON_Jobs()
      .then((data) => {
        this.jobs = data
        let jobsFilter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
        console.log(this.removeFieldsWithAllValue(this.filter), jobsFilter)
        this.router.navigate(['/tim-viec-lam']);
        this.totalPages = Math.ceil(jobsFilter.length / 10);
        this.showJobs = this.jobsngon.paginateArray(jobsFilter, 1, 10)
        this.loading = true
      }, err => {
        this.loading = true
        console.log(err)
      })
  }

  /// xem draer chi tiết jobs //
  visible = false;
  job: any = {}
  openJob(item, event): void {
    event.stopPropagation()
    this.visible = true;
    this.job = item
  }

  close(event): void {
    this.visible = event;
  }

  gotoDetailCompany(company, event) {
    event.stopPropagation()
    this.router.navigate(['/cong-ty', company.link]);
  }

}
