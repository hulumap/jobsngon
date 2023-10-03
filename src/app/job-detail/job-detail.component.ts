import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UpCvComponent } from './components/up-cv/up-cv.component';
import { Jobsngon } from '../service/jobsngon.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: any = {}
  hide: boolean = false
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    public jobsngon: Jobsngon
  ) { }

  ngOnInit(): void {
    this.getDetailJob()
  }

  getDetailJob() {
    this.route.params.subscribe((routeParam) => {
      this.jobsngon.getJSON_Company()
        .then((company) => {
          this.jobsngon.getDetailJobs(routeParam.link)
            .then((data) => {
              data.company = company.filter(item => item.id == data.id_company)[0]
              this.job = data
              this.jobsngon.setTitle(this.job.name)
              this.hide = true
            })
        })
    });
  }


  openUpcv() {
    const dialogRef = this.dialog.open(UpCvComponent, {
      width: '40%',
      maxWidth: '100%',
      // height: '60%',
      // data: item,
      //disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {

    });
  }

}
