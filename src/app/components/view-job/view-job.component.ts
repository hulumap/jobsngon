import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {
  @Input() job: any = {}
  @Input() visible: boolean = true
  @Output() hide: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  close(): void {
    this.visible = false;
    this.hide.emit(this.visible)
  }


}
