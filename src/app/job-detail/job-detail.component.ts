import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UpCvComponent } from './components/up-cv/up-cv.component';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.params.subscribe((routeParam) => {
      console.log(routeParam)
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
