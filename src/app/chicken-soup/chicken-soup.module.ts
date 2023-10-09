import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChickenSoupComponent } from './chicken-soup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { ReadComponent } from './read/read.component';

const routes: Routes = [
  {
    path: '',
    component: ChickenSoupComponent,
    children: [
    ]
  }
]

@NgModule({
  declarations: [
    ChickenSoupComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes),
  ]
})
export class ChickenSoupModule { }
