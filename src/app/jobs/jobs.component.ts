import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jobsngon } from '../service/jobsngon.service';
import address from '../../assets/jobs/address.json'
import lang from '../../assets/jobs/lang.json'
import career from '../../assets/jobs/career.json'
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  user: any = ""
  exp: any = [{ link: 'chua-co-kinh-nghiem', name: "Chưa có kinh nghiệm" }, { link: 'duoi-1-nam', name: "Dưới 1 năm" }, { link: '1-nam', name: "1 năm" }, { link: '2-nam', name: "2 năm" }, { link: '3-nam', name: "3 năm" }, { link: '4-nam', name: "4 năm" }, { link: '5-nam', name: "5 năm" }, { link: 'tren-5-nam', name: "trên 5 năm" }]
  sex: any = [{ link: "nam", name: "Nam" }, { link: "nu", name: "Nữ" }, { link: "khong-yeu-cau", name: "Không yêu cầu" }]
  lang: any = lang
  level: any = [{ link: 'nhan-vien', name: "Nhân viên" }, { link: 'truong-nhom', name: "Trưởng nhóm" }, { link: 'truong-pho-phong', name: "Trưởng/ Phó phòng" }, { link: 'quan-ly-giam-sat', name: "Quản lý/ Giám sát" }, { link: 'pho-giam-doc', name: "Phó giám đốc" }, { link: 'giam-doc', name: "Giám đốc" }, { link: 'thuc-tap-sinh', name: "Thực tập sinh" }]
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
  pageSize = 20;
  totalPages: any = 0
  loading: boolean = false
  isMobile: boolean = false
  filter_mobie: boolean = false
  constructor(private jobsngon: Jobsngon, private router: Router, private route: ActivatedRoute, private message: NzMessageService) {
    this.route.queryParams.subscribe(params => {
      if (params) {
        if (params.key) this.filter.name = params.key
        if (params.page) this.currentPage = parseInt(params.page)
        if (params.lang) this.filter.code_lang = this.lang.find(item => item.link == params.lang).link
        if (params.address) this.filter.code_address = this.address.find(item => item.link == params.address).link
        if (params.career) this.filter.code_career = this.career.find(item => item.link == params.career).link
      }
    });
  }

  ngOnInit(): void {
    if (screen.width < 600) this.isMobile = true
    this.getInfo()
  }

  getInfo() {
    this.jobsngon.getLocalData('user')
      .then((user) => {
        if (user) this.user = { ...user }
        this.getJobs()
      }, err => {
        console.log(err)
      })
  }

  getJobs() {
    this.jobsngon.getJSON_Jobs()
      .then((data) => {
        this.jobs = this.jobsngon.shuffleArray(data)
        let jobsFilter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
        this.totalPages = Math.ceil(jobsFilter.length / this.pageSize);
        this.showJobs = this.filterJobsSaved(jobsFilter)
        this.loading = true
      }, err => {
        this.loading = true
        console.log(err)
      })
  }

  filterJobsSaved(jobsFilter) {
    // lọc id của jobs đã lưu
    let showJobs: any[] = []
    if (this.user) {
      const savedJobIds = this.user.jobs_saved.map(job => job.id);
      showJobs = this.jobsngon.paginateArray(jobsFilter, this.currentPage, this.pageSize)
        .map((item: any) => {
          item.saved = savedJobIds.includes(item.id);
          return { ...item };
        });

    } else {
      showJobs = this.jobsngon.paginateArray(jobsFilter, this.currentPage, this.pageSize)
    }
    return showJobs
  }


  // Hàm để lọc các công việc dựa trên nhiều trường, bao gồm cả trường "name"
  filterJobs(filters: Partial<any>): any[] {
    return this.jobs.filter((job) => {
      let isMatch = true; // Assume it's a match by default

      // Duyệt qua từng trường trong filters
      for (const key in filters) {
        if (filters.hasOwnProperty(key)) {
          const filterValue = filters[key];
          const jobValue = job[key];

          // Check if the filter key is "name" and not empty
          if (key === 'name' && typeof filterValue === 'string' && filterValue.trim() !== "") {
            const filterName = this.jobsngon.changeAlias(filterValue);
            const jobName = this.jobsngon.changeAlias(job.name);

            if (!jobName.includes(filterName)) {
              isMatch = false; // Name doesn't match, set isMatch to false
            }
          } else {
            // Handle other filter conditions here
            if (typeof filterValue === 'string' && typeof jobValue === 'string') {
              if (!jobValue.toLowerCase().includes(filterValue.toLowerCase())) {
                isMatch = false; // Other conditions don't match, set isMatch to false
              }
            } else if (filterValue !== jobValue) {
              isMatch = false; // Other conditions don't match, set isMatch to false
            }
          }
        }
      }

      // Return true only if all conditions match
      return isMatch;
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
    this.jobsngon.gotoJobDetail(job)
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage = this.currentPage - 1
      let filter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
      // console.log(this.filter, filter)
      let param = {
        page: this.currentPage,
        // address: this.address.find(item => item.link == this.filter.code_address).link
      }
      this.router.navigate(['/tim-viec-lam'], { queryParams: param });
      this.showJobs = this.filterJobsSaved(filter)
    }
  }


  // cập nhật lại link là id luôn, cho dễ code

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage = this.currentPage + 1;
      let filter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
      //console.log(this.removeFieldsWithAllValue(this.filter))
      let param = {
        page: this.currentPage,
        //address: this.address.find(item => item.link == this.filter.code_address).link
      }
      this.router.navigate(['/tim-viec-lam'], { queryParams: param });
      this.showJobs = this.filterJobsSaved(filter)
    }
  }

  public checkKey(event) {
    if (event.keyCode == 13) this.search()
  }


  search() {
    this.jobsngon.getJSON_Jobs()
      .then((data) => {
        this.currentPage = 1
        this.jobs = this.jobsngon.shuffleArray(data)
        let jobsFilter = this.filterJobs(this.removeFieldsWithAllValue(this.filter))
        //console.log(this.removeFieldsWithAllValue(this.filter), jobsFilter)
        this.router.navigate(['/tim-viec-lam']);
        this.totalPages = Math.ceil(jobsFilter.length / this.pageSize);
        this.showJobs = this.filterJobsSaved(jobsFilter)
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


  showFilter(event) {
    event.stopPropagation()
    this.filter_mobie = !this.filter_mobie
    console.log(event, this.filter_mobie)
  }

  searchMobile() {
    this.filter_mobie = false
    this.search()
  }


  saved(job, event) {
    event.stopPropagation()
    if (this.user) {
      if (!this.user.jobs_saved) {
        this.user.jobs_saved = []
      }
      this.user.jobs_saved.push(job)
      this.jobsngon.updateInfo({ jobs_saved: this.user.jobs_saved })
        .then(() => {
          job.saved = true
          this.message.create('success', 'Lưu thành công');
          this.jobsngon.setLocalData("user", this.user)
        }, err => {
          this.message.create('error', 'Lưu thất bại, vui lòng đăng nhập lại');
        })
    } else this.message.create('warning', 'Vui lòng đăng nhập');
  }

}
