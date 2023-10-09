import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LettersComponent } from './letters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NgZorroAntModule } from '../ng-zorro-ant.module';
import { LetterTodayComponent } from './letter-today/letter-today.component';
import { LetterTableComponent } from './letter-table/letter-table.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LetterContentComponent } from './letter-content/letter-content.component';
import { LetterLoveComponent } from './letter-love/letter-love.component';

const routes: Routes = [
  {
    path: '',
    component: LettersComponent,
    children: [
      {
        path: '',
        component: LetterTableComponent,
      },
      {
        path: 'yeu-thich',
        component: LetterLoveComponent,
      },
      {
        path: 'noi-dung-thu',
        component: LetterContentComponent,
      },
      {
        path: 'buc-thu-hom-nay',
        component: LetterTodayComponent,
      },
    ]
  }
]

@NgModule({
  declarations: [
    LettersComponent, LetterTableComponent, LetterTodayComponent,LetterContentComponent,LetterLoveComponent
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
export class LettersModule { }
