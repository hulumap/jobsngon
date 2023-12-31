import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { InfoComponent } from './info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { ListCvComponent } from './list-cv/list-cv.component';
import { ViewCvComponent } from './view-cv/view-cv.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { JobSavedComponent } from './job-saved/job-saved.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: '',
      //   pathMatch: 'full',
      // },
      {
        path: '',
        component: InfoComponent,
      },
      {
        path: 'viec-lam-da-ung-tuyen',
        component: JobApplyComponent,
      },
      {
        path: 'viec-lam-da-luu',
        component: JobSavedComponent,
      },
      {
        path: 'cv',
        component: ListCvComponent,
      },
    ],
  },
  {
    path: 'thiet-ke',
    loadChildren: () => import('./template/template.module').then(m => m.TemplateModule)
  },
]

@NgModule({
  declarations: [
    AccountComponent,
    InfoComponent,
    ListCvComponent,
    ViewCvComponent,
    JobApplyComponent,
    JobSavedComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AccountModule { }
