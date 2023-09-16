import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() isVisible: boolean = true
  @Input() dataIn: any
  @Output() dataOut: EventEmitter<any> = new EventEmitter()
  @Output("closeMenu") closeMenu = new EventEmitter<any>();

  data: any = "" // biến show ra HTML
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = this.dataIn
  }

  close(): void {
    this.closeMenu.emit(false)
  }

}
