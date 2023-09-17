import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { InfoComponent } from './info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { ListCvComponent } from './list-cv/list-cv.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'thong-tin',
        pathMatch: 'full',
      },
      {
        path: 'thong-tin',
        component: InfoComponent,
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
    ListCvComponent
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
