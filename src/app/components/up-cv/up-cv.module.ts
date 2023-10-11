import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitCvUserComponent } from './submit-cv-user/submit-cv-user.component';
import { SubmitCvComponent } from './submit-cv/submit-cv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from 'src/app/ng-zorro-ant.module';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    SubmitCvUserComponent,
    SubmitCvComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [SubmitCvUserComponent,
    SubmitCvComponent]
})
export class UpCvModule { }
