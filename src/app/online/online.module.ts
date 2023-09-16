import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineComponent } from './online.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { Online2Component } from './online2/online2.component';
import { Online1Component } from './online1/online1.component';
import { Online3Component } from './online3/online3.component';
import { Online4Component } from './online4/online4.component';
import { Online5Component } from './online5/online5.component';
import { Online6Component } from './online6/online6.component';
import { AutosizeModule } from '@techiediaries/ngx-textarea-autosize';
import { AutoSizeInputModule } from 'ngx-autosize-input';

const routes: Routes = [
  {
    path: '',
    component: OnlineComponent,
  },
]

@NgModule({
  declarations: [
    OnlineComponent, Online1Component, Online2Component, Online3Component, Online4Component, Online5Component, Online6Component
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    AutoSizeInputModule,
    RouterModule.forChild(routes),
  ]
})
export class OnlineModule { }
