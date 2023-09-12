import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDetailComponent } from './job-detail.component';
import { UpCvComponent } from './components/up-cv/up-cv.component';
import { SimilarJobComponent } from './components/similar-job/similar-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';

const routes: Routes = [
  {
    path: '',
    component: JobDetailComponent
  }
]

@NgModule({
  declarations: [
    JobDetailComponent,
    UpCvComponent,
    SimilarJobComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class JobDetailModule { }
