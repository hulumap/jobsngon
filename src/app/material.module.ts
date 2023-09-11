import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCardModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    DragDropModule

  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatCardModule,
    ScrollingModule,
    MatProgressSpinnerModule,
    DragDropModule
  ]
})

export class MaterialModule { }
