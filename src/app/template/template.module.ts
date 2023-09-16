import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';
import { Template6Component } from './template6/template6.component';
import { ThemeComponent } from './theme/theme.component';
import { AutosizeModule } from '@techiediaries/ngx-textarea-autosize';
import { MenuComponent } from './menu/menu.component';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import {DragDropModule} from '@angular/cdk/drag-drop';

const routes: Routes = [
  {
    path: '',
    component: TemplateComponent,
  },
  {
    path: 'mau-1',
    component: Template1Component,
  },
  {
    path: 'mau-2',
    component: Template2Component,
  },
  {
    path: 'mau-3',
    component: Template3Component,
  },
  {
    path: 'mau-4',
    component: Template4Component,
  },
  {
    path: 'mau-5',
    component: Template5Component,
  },
  {
    path: 'mau-6',
    component: Template6Component,
  },
]

@NgModule({
  declarations: [
    TemplateComponent,ThemeComponent, Template1Component, Template2Component, Template3Component, Template4Component, Template5Component, Template6Component, MenuComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    NgZorroAntModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule,
    AutoSizeInputModule,
    RouterModule.forChild(routes),
  ]
})
export class TemplateModule { }
