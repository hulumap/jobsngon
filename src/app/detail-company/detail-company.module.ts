import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCompanyComponent } from './detail-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { ViewJobModule } from '../components/view-job/view-job.module';


const routes: Routes = [
  {
    path: '',
    component: DetailCompanyComponent
  }
]

@NgModule({
  declarations: [
    DetailCompanyComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ViewJobModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class DetailCompanyModule { }
