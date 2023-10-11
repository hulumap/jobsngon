import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntModule } from '../../ng-zorro-ant.module';
import { ViewJobComponent } from './view-job.component';
import { UpCvModule } from '../up-cv/up-cv.module';


@NgModule({
    declarations: [
        ViewJobComponent
    ],
    imports: [
        CommonModule,
        NgZorroAntModule,
        FormsModule,
        UpCvModule,
        ReactiveFormsModule,
    ],
    exports: [ViewJobComponent]
})
export class ViewJobModule { }