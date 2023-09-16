import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Jobsngon } from 'src/app/service/jobsngon.service';
@Component({
  selector: 'app-template6',
  templateUrl: './template6.component.html',
  styleUrls: ['./template6.component.scss']
})
export class Template6Component implements OnInit {
  hide: boolean; /// biến bắt lỗi data chưa về kip
  resume: any  // biến chứa dữ liệu cv ban đầu
  constructor(
    public jobsngon: Jobsngon,
    private message: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getResume()
  }

  getResume() { // hàm lấy dữ liệu cho CV
    this.hide = true // biến bắt dữ liệu chưa về kịp
    this.jobsngon.getResume('en').then((data) => {
      this.resume = data
      this.hide = false
    }, err => console.log(err))
  }

  disable: boolean = false // các biến tránh phá db
  saveResume() { // hàm lưu thêm dữ liệu màu sắc, ngôn ngữ 
    this.disable = true
    this.jobsngon.saveResume(this.resume, 6).then((res) => {
      if (res) this.disable = false
    }, err => console.log(err))
  }

  changeLang(value) { // hàm lấy ngôn ngữ cho CV, đồng thời thay đổi ngôn ngữ cho cv
    this.resume = this.jobsngon.changeLang(value, this.resume)
  }
  setDefault() {
    this.resume = this.jobsngon.setDefault('en')
  }

  createMessageSuccess(value: string): void {
    this.message.create('success', value);
  }

  viewOnline() { // hàm xem cv online
    this.jobsngon.viewOnline(this.resume, '6')
  }
  copy() { // copy link cv online
    this.jobsngon.copy(this.resume)
  }
  upLogo(event) {
    this.jobsngon.upLogo(event).then((downloadURL) => {
      this.jobsngon.deleteFile(this.resume.info.img)
      this.resume.info.img = downloadURL
    }, err => console.log(err))
  }
  getFile() {
    document.getElementById("file-upload").click();
  }

  setColor(value) { // hàm thay mầu, output từ theme qua
    this.resume.theme.color = value
  }
  setFontfamily(value) {  // hàm thay kiểu chữ, output từ theme qua
    this.resume.theme.fontfamily = value
  }
  setFontsize(value) { // hàm thay kích cỡ chữ, output từ theme qua
    this.resume.theme.title = value.title
    this.resume.theme.font = value.font
    this.resume.theme.name = value.name
  }
  down: boolean = false
  exportPDF() { // hàm in CV, hoặc tải về pdf
    this.down = true
    let data = document.getElementById('tmp6');
    this.jobsngon.exportPDF(this.resume.info.name, data)
      .then((res) => {
        this.down = false
        if (!res) this.createMessageSuccess("Có lỗi vui lòng thử lại")
      })
  }


  isVisible: boolean = false // biến mở menu
  showInfo: boolean = false
  openMenu(): void {
    this.isVisible = true;
  }
  closeMenu(event) {
    this.isVisible = event
  }

  //** Thêm xóa sủa kéo cho kinh nghiệm, học vấn, dự án, hoạt động */
  showDragE: boolean = false
  show = null
  showDelete: any = ''
  addDataE(i) {
    let data = { ...this.resume.data_eec[i].data[0] }
    this.resume.data_eec[i].data.push(data)
  }
  deleteDataE(i, j) {
    this.resume.data_eec[i].data.splice(j, 1)
  }
  hideDataE(data) {
    data.status = false
  }
  dropEsub(event: CdkDragDrop<string[]>, i) {
    moveItemInArray(this.resume.data_eec[i].data, event.previousIndex, event.currentIndex);
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.resume.dataE, event.previousIndex, event.currentIndex);
  }

  //** Thêm xóa sửa cho kỹ năng, ngôn ngữ, yêu thích */
  showDragS: boolean = false
  showS = null
  showDeleteS: any = ''
  changeski: boolean = false
  addDataS(i) {
    let data = { ...this.resume.data_slc[i].data[0] }
    this.resume.data_slc[i].data.push(data)
  }
  deleteDataS(i, j) {
    this.resume.data_slc[i].data.splice(j, 1)
  }
  hideDataS(data) {
    data.status = false
  }
  dropSsub(event: CdkDragDrop<string[]>, i) {
    moveItemInArray(this.resume.data_slc[i].data, event.previousIndex, event.currentIndex);
  }
  dropS(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.resume.data_slc, event.previousIndex, event.currentIndex);
  }

  //** Thêm xóa sủa cho thông tin thêm, người tham chiếu */
  showL = null
  showDragL: boolean = false
  hideDataL(data) {
    console.log(data)
    data.status = false
  }
  dropL(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.resume.data_adr, event.previousIndex, event.currentIndex);
  }
  //** Mục tiêu riêng lẻ */
  showGoal: boolean = false
  hideGoal() {
    this.resume.goal.status = false
  }
}
