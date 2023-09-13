import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';


const routes: Routes = [
  {
    path: '',
    component: JobsComponent
  }
]

@NgModule({
  declarations: [
    JobsComponent,
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
export class JobsModule { }
