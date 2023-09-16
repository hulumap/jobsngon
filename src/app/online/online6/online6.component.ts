import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { NzMessageService } from 'ng-zorro-antd/message';
import { Title } from '@angular/platform-browser';
import { Jobsngon } from 'src/app/service/jobsngon.service';

@Component({
  selector: 'app-online6',
  templateUrl: './online6.component.html',
  styleUrls: ['./online6.component.scss']
})
export class Online6Component implements OnInit {

  @Input() id: any = null // data truyền vảo của online
  resume: any = {}
  hide: boolean;
  constructor(
    public jobsngon: Jobsngon,
    private location: Location,
    private message: NzMessageService,
    private titleService: Title,
  ) {
  }


  ngOnChanges() {
    this.hide = true
    let id = this.id.substring(0, this.id.length - 1);
    this.jobsngon.getResumeOnline(id).then((data) => { // hàm get dữ liệu theo UID
      if (!data) return this.createMessageSuccess("Bạn chưa tạo dữ liệu cho CV")
      this.hide = false
      this.resume = data
      this.titleService.setTitle(this.resume.info.name);
    })

  }
  copy() { // copy link cv online
    let path = "https://cv.jobsngon.com" + this.location.path()
    navigator.clipboard.writeText(path);
    this.createMessageSuccess("Đã copy")
  }
  createMessageSuccess(value: string): void {
    this.message.create('success', value);
  }
  ngOnInit(): void { }

}
