import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  }
]

@NgModule({
  declarations: [
    CompanyComponent,
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
export class CompanyModule { }
