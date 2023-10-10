import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.scss']
})
export class ViewCvComponent implements OnInit {
  file_cv: any = ""
  constructor(public dialogRef: MatDialogRef<ViewCvComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    console.log(this.data)
    this.file_cv = this.sanitizer.bypassSecurityTrustResourceUrl(this.data)
  }
  close() {
    this.dialogRef.close()
  }

}
