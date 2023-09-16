import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  hide: boolean = false
  @Input() theme: any = null
  @Output() color: EventEmitter<any> = new EventEmitter()
  @Output() fontfamily: EventEmitter<any> = new EventEmitter()
  @Output() fontsize: EventEmitter<any> = new EventEmitter()
  @Output() lang: EventEmitter<any> = new EventEmitter()

  colors: any[] = ['#4fa4d8', '#A8a7a7', '#e84575', '#336b87', '#3d9a8b', '#8C223F', '#f48534', '#e16f6f', '#355c7d', '#00b04f', '#644c4c', '#333']

  //colors: any[] = ['#f48534', '#e16f6f', '#67a79e', '#00b04f', '#66aebe', '#333']
  listOfFonts = [
    { name: 'Arial', value: 'Arial, Helvetica, sans-serif' },
    { name: 'Times New Roman', value: 'Times New Roman' },
    // { name: 'Courier New', value: 'Courier New' },
    { name: 'Roboto', value: `Roboto` },
    //{ name: 'Promt', value: 'prompt,Arial,sans-serif' },
    { name: 'TakaoPGothic', value: 'ms mincho, TakaoPGothic, takao pゴシック, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, Osaka, メイリオ, Meiryo, ＭＳ Ｐゴシック, ms pgothic, sans-serif' },
    { name: 'Candara', value: 'Candara' },
    { name: 'Calibri', value: 'Calibri' },
  ];

  font: any = [
    { title: 12, font: 10, name: 22 },
    { title: 14, font: 12, name: 24 },
    { title: 16, font: 14, name: 26 }
  ]
  cvlang: any = [
    { img: 'assets/icon/vi.svg', value: 'vi' },
    { img: 'assets/icon/en.svg', value: 'en' },
    { img: 'assets/icon/jp.svg', value: 'jp' }
  ]

  data: any = {} // biến chă theme

  constructor() { }

  ngOnInit(): void {

    // setTimeout(() => {
    //   this.data = this.theme
    // }, 500);
  }
  ngOnChanges() {
    this.data = this.theme
  }

  setColor(color) {
    this.color.emit(color)
    this.data.color = color
  }
  setFontfamily(font) {
    this.fontfamily.emit(font)
  }
  setFontsize(size) {
    this.fontsize.emit(size)
    this.data.font = size.font
  }
  setCvlang(lang) {
    this.lang.emit(lang)
    this.data.lang = lang.value
  }

}
