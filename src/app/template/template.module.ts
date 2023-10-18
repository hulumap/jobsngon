import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
  },

]

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class TemplateModule { }
