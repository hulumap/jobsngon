import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaculateSalaryComponent } from './caculate-salary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';


const routes: Routes = [
  {
    path: '',
    component: CaculateSalaryComponent
  }
]

@NgModule({
  declarations: [
    CaculateSalaryComponent,
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
export class CaculateSalaryModule { }
