import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { BannerComponent } from './components/banner/banner.component';
import { BannerCvComponent } from './components/banner-cv/banner-cv.component';
import { JobsngonHelpComponent } from './components/jobsngon-help/jobsngon-help.component';
import { TopHiringCompanyComponent } from './components/top-hiring-company/top-hiring-company.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    BannerCvComponent,
    JobsngonHelpComponent,
    TopHiringCompanyComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class HomeModule { }
