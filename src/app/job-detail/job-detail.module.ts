import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailComponent } from './job-detail.component';
import { UpCvComponent } from './components/up-cv/up-cv.component';



@NgModule({
  declarations: [
    JobDetailComponent,
    UpCvComponent
  ],
  imports: [
    CommonModule
  ]
})
export class JobDetailModule { }
