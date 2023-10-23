import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import Cleave from 'cleave.js';
@Component({
  selector: 'app-caculate-tax',
  templateUrl: './caculate-tax.component.html',
  styleUrls: ['./caculate-tax.component.scss']
})
export class CaculateTaxComponent implements OnInit {
  gross: number = 0
  net: number = 0
  salary_basic: number = 1800000
  tax_reduce: number = 11000000
  person_reduce = 4400000
  // 
  number_person: number = 0
  value_bhxh: any = 'A'
  bhxh: any = 0
  bhyt: any = 0
  bhtn: any = 0
  salary_1: number = 406800000
  salary_2: number = 4160000
  salary_3: number = 3640000
  salary_4: number = 3250000
  value_area: any = "1"

  tax_person: any = 0
  tax_total: any = 0
  salary_before_tax: any = 0 // thu nhập trước thueesF
  salary_after_tax: any = 0 // thu nhập chịu thuế
  constructor(private message: NzMessageService,) { }

  ngOnInit(): void {
  }


  //  format nhập mức lương
  cleaveSalary: any;
  cleaveBhxh: any
  ngAfterViewInit() {
    this.cleaveSalary = new Cleave('.input-salary-tax', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    });
    this.cleaveBhxh = new Cleave('.input-bhxh-tax', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    });
  }

  caculate(value) {

    let salary = parseInt(this.cleaveSalary.getRawValue());
    if (salary) {
      this.gross = 0
      this.net = 0
      if (value == 'gross') {
        this.gross = salary
        this.caculateBh(this.gross)
        // tax 
        this.salary_before_tax = this.gross - (this.bhxh + this.bhyt + this.bhtn)
        this.salary_after_tax = this.salary_before_tax - this.tax_reduce - (this.number_person * this.person_reduce)
        let value_tax = this.caculateTax(this.salary_after_tax)
        this.tax_total = value_tax.tax
        this.taxDetails = value_tax.taxDetails
        this.net = this.gross - (this.bhxh + this.bhyt + this.bhtn + this.tax_total)
      }
      else {
        this.net = salary

        let gross

        if (this.net > 11000000) {

          // const netSalaryAfterDeductions = this.net - (this.tax_reduce);
          // let taxToPay = 0;

          // for (let bracket of this.taxBrackets) {
          //   if (netSalaryAfterDeductions <= bracket.maxIncome) {
          //     taxToPay += (netSalaryAfterDeductions - bracket.minIncome) * bracket.taxRate;
          //     break;
          //   } else {
          //     taxToPay += (bracket.maxIncome - bracket.minIncome) * bracket.taxRate;
          //   }
          // }

          // const salaryBeforeTax = netSalaryAfterDeductions + taxToPay;
          // console.log(salaryBeforeTax);



          // gross = this.net + this.bhxh + this.bhyt + this.bhtn

          // x: th nhập trước thuế
          // net = x - (0.05x- 0.05*11)
          // net = 0.95x + 550000
          // net = (1-%ta*x) + (%ta*x * (this.tax_reduce + (this.number_person * this.person_reduce)


          // this.salary_before_tax = (this.net - ((this.tax_reduce + (this.number_person * this.person_reduce)*%tax)) / 1-%tax

          // this.salary_before_tax = (this.net - 550000) / 0.95
          // gross = this.salary_before_tax / 0.895
          // this.gross = gross
          // this.caculateBh(gross)
          // this.salary_after_tax = this.salary_before_tax - this.tax_reduce - (this.number_person * this.person_reduce)
          // this.tax_total = this.caculateTax(this.salary_after_tax)
          // this.gross = gross + this.tax_total
        } else {
          gross = this.net / 0.895 // th: chưa có thuế và lương tính bh nhỏ hơn giá trị quy định
          this.caculateBh(gross)
          // let gross = this.net + this.bhtn + this.bhxh + this.bhyt
          this.salary_before_tax = gross - (this.bhxh + this.bhyt + this.bhtn)
          this.salary_after_tax = this.salary_before_tax - this.tax_reduce - (this.number_person * this.person_reduce)
          this.tax_total = this.caculateTax(this.salary_after_tax)
          this.gross = gross + this.tax_total
        }
      }
    } else {
      this.message.info("Vui lòng nhập lương")
    }


  }



  taxBrackets = [
    { minIncome: 0, maxIncome: 5000000, taxRate: 0.05, title: "Đến 5 triệu VNĐ" },
    { minIncome: 5000001, maxIncome: 10000000, taxRate: 0.10, title: "Trên 5 triệu VNĐ đến 10 triệu VNĐ	" },
    { minIncome: 10000001, maxIncome: 18000000, taxRate: 0.15, title: "Trên 10 triệu VNĐ đến 18 triệu VNĐ" },
    { minIncome: 18000001, maxIncome: 32000000, taxRate: 0.20, title: "Trên 18 triệu VNĐ đến 32 triệu VNĐ" },
    { minIncome: 32000001, maxIncome: 52000000, taxRate: 0.25, title: "Trên 32 triệu VNĐ đến 52 triệu VNĐ" },
    { minIncome: 52000001, maxIncome: 80000000, taxRate: 0.30, title: "Trên 52 triệu VNĐ đến 80 triệu VNĐ" },
    { minIncome: 80000001, maxIncome: Infinity, taxRate: 0.35, title: "Trên 80 triệu VNĐ" },
  ];
  // Hàm tính toán lương GROSS từ lương NET
  calculateGrossSalary(netSalary: number) {

  }


  caculateBh(value_caculate_bh) {
    let value_bhtn
    if (this.value_area == "1") value_bhtn = 936000
    if (this.value_area == "2") value_bhtn = 832000
    if (this.value_area == "3") value_bhtn = 728000
    if (this.value_area == "4") value_bhtn = 650000

    if (this.value_bhxh == 'A') {
      let value = value_caculate_bh <= 36000000 ? value_caculate_bh : 36000000
      this.bhxh = 0.08 * value
      this.bhtn = (value_caculate_bh * 0.01) > value_bhtn ? value_bhtn : (value_caculate_bh * 0.01)
      this.bhyt = 0.015 * value
    }
    else {
      let input_bhxh = parseInt(this.cleaveBhxh.getRawValue())
      this.bhxh = input_bhxh * 0.08
      this.bhtn = 0.01 * (input_bhxh * 0.01) > value_bhtn ? value_bhtn : (input_bhxh * 0.01)
      this.bhyt = 0.015 * input_bhxh
    }
  }


  taxDetails: any = []

  caculateTax(income) {
    let data = {
      tax: 0,
      taxDetails: []
    }
    for (let bracket of this.taxBrackets) {
      if (income > bracket.minIncome) {
        const taxableAmount = Math.min(income, bracket.maxIncome) - bracket.minIncome;
        data.tax += taxableAmount * bracket.taxRate;
        const taxAmount = taxableAmount * bracket.taxRate;
        // Làm tròn số tiền thuế tới 2 chữ số thập phân
        const roundedTaxAmount = parseFloat(taxAmount.toFixed(0));
        data.taxDetails.push({ ...bracket, taxAmount: roundedTaxAmount });
      } else {
        // Nếu thu nhập không vượt qua thu nhập tối thiểu cho phạm vi thuế,
        // thêm thông tin về phạm vi thuế vào mảng taxDetails với số tiền thuế là 0.
        data.taxDetails.push({ ...bracket, taxAmount: 0 });
      }
    }

    return data;
  }

  data: any = `<h2 id="thue-thu-nhap-ca-nhan-la-gi"><strong>Thuế thu nhập c&aacute; nh&acirc;n l&agrave; g&igrave;?</strong></h2>
  <p>Thuế thu nhập c&aacute; nh&acirc;n (Tiếng Anh: Personal income tax) l&agrave; khoản tiền m&agrave; người c&oacute; thu nhập cần tr&iacute;ch từ lương v&agrave; c&aacute;c nguồn thu kh&aacute;c (nếu c&oacute;) của m&igrave;nh để nộp v&agrave;o ng&acirc;n s&aacute;ch nh&agrave; nước sau khi đ&atilde; được giảm trừ.</p>
  <p>Thuế thu nhập c&aacute; nh&acirc;n kh&ocirc;ng đ&aacute;nh v&agrave;o tất cả c&aacute;c đối tượng m&agrave; c&oacute; mức lương quy định cần đ&oacute;ng ri&ecirc;ng, g&oacute;p phần thu hẹp khoảng c&aacute;ch giữa c&aacute;c tầng lớp trong x&atilde; hội.</p>
  <h2 id="cong-cu-tinh-thue-thu-nhap-ca-nhan"><strong>C&ocirc;ng cụ t&iacute;nh thuế thu nhập c&aacute; nh&acirc;n</strong></h2>
  <p>Trước khi t&iacute;nh thuế thu nhập c&aacute; nh&acirc;n ch&uacute;ng ta cần x&aacute;c định đối tượng cần đ&oacute;ng thuế thu nhập c&aacute; nh&acirc;n. Đối tượng cần đ&oacute;ng thuế thu nhập c&aacute; nh&acirc;n chia ra hai đối tượng ch&iacute;nh l&agrave; c&aacute; nh&acirc;n cư tr&uacute; v&agrave; c&aacute; nh&acirc;n kh&ocirc;ng cư tr&uacute;.</p>
  <h3 id="cong-cu-tinh-thue-thu-nhap-ca-nhan-ca-nhan-cu-tru"><strong>C&aacute; nh&acirc;n cư tr&uacute;</strong></h3>
  <h4><strong>C&aacute; nh&acirc;n cư tr&uacute; l&agrave; g&igrave;?</strong></h4>
  <p>Tham khảo C&ocirc;ng văn 3604/TCT-TNCN ng&agrave;y 04/09/2015 của Tổng Cục Thuế v&agrave; C&ocirc;ng văn số 3313/CT-TTHT ng&agrave;y 22/1/2018 của Cục Thuế TP. H&agrave; Nội, c&aacute; nh&acirc;n cư tr&uacute; bao gồm những đối tượng thỏa m&atilde;n một trong hai điều kiện sau:</p>
  <p>- C&aacute; nh&acirc;n c&oacute; nơi ở thường xuy&ecirc;n tại Việt Nam, chia l&agrave;m một trong hai trường hợp sau:</p>
  <ul>
  <li>C&oacute; nh&agrave; thu&ecirc; để ở tại Việt Nam theo quy định của ph&aacute;p luật về nh&agrave; ở, v&agrave; thời hạn của c&aacute;c hợp đồng thu&ecirc; k&eacute;o d&agrave;i từ 183 ng&agrave;y trở l&ecirc;n trong năm t&iacute;nh thuế.</li>
  <li>C&oacute; nơi ở thường xuy&ecirc;n theo quy định của ph&aacute;p luật về cư tr&uacute;.</li>
  </ul>
  <p>- C&aacute; nh&acirc;n c&oacute; mặt tại Việt Nam từ 183 ng&agrave;y trở l&ecirc;n t&iacute;nh trong một năm dương lịch hoặc trong 12 th&aacute;ng li&ecirc;n tục kể từ ng&agrave;y đầu ti&ecirc;n c&oacute; mặt tại Việt Nam, trong đ&oacute; ng&agrave;y đến v&agrave; ng&agrave;y đi được t&iacute;nh l&agrave; 01 ng&agrave;y. Ng&agrave;y đến v&agrave; ng&agrave;y đi được căn cứ v&agrave;o chứng thực của cơ quan quản l&yacute; xuất nhập cảnh tr&ecirc;n hộ chiếu (hoặc giấy th&ocirc;ng h&agrave;nh) của c&aacute; nh&acirc;n khi đến v&agrave; khi rời Việt Nam. Trường hợp nhập cảnh v&agrave; xuất cảnh trong c&ugrave;ng một ng&agrave;y th&igrave; được t&iacute;nh chung l&agrave; một ng&agrave;y cư tr&uacute;.</p>
  <h4><strong>C&ocirc;ng thức t&iacute;nh thuế thu nhập c&aacute; nh&acirc;n của c&aacute; nh&acirc;n cư tr&uacute;</strong></h4>
  <p>Vậy<span style="color: #00ff00;">&nbsp;<span style="color: #339966;"><a style="color: #339966;" href="https://www.topcv.vn/cong-cu-tinh-thue-thu-nhap-ca-nhan-moi-chinh-xac-nhat" target="_blank" rel="noopener noreferrer">t&iacute;nh thuế thu nhập c&aacute; nh&acirc;n</a></span></span>&nbsp;t&iacute;nh như thế n&agrave;o? H&atilde;y c&ugrave;ng tham khảo những th&ocirc;ng tin dưới đ&acirc;y để c&oacute; thể t&iacute;nh mức thuế thu nhập c&aacute; nh&acirc;n ch&iacute;nh x&aacute;c.</p>
  <p><strong>A. Đối với c&aacute; nh&acirc;n k&yacute; hợp đồng lao động từ 03 th&aacute;ng trở l&ecirc;n:</strong></p>
  <figure class="table">
  <table class="table table-bordered">
  <tbody>
  <tr>
  <td>
  <p>Thuế thu nhập c&aacute; nh&acirc;n phải nộp = Thu nhập t&iacute;nh thuế x Thuế suất</p>
  </td>
  </tr>
  </tbody>
  </table>
  </figure>
  <p><strong>* Diễn giải c&ocirc;ng thức:</strong></p>
  <p>-&nbsp;Thu nhập t&iacute;nh thuế = Thu nhập chịu thuế - C&aacute;c khoản giảm trừ</p>
  <p>-&nbsp;Thu nhập chịu thuế TNCN = Tổng thu nhập - C&aacute;c khoản thu nhập được miễn thuế TNCN</p>
  <p>-&nbsp;Tổng thu nhập được x&aacute;c định theo quy định tại Khoản 2 Điều 2&nbsp;<a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" target="_blank" rel="noopener noreferrer">Th&ocirc;ng tư 111/2013/TT-BTC</a>&nbsp;v&agrave; Khoản 1, 2, 3, 4, 5 Điều 11&nbsp;<a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-92-2015-TT-BTC-huong-dan-thue-gia-tri-gia-tang-thue-thu-nhap-ca-nhan-282089.aspx" target="_blank" rel="noopener noreferrer">Th&ocirc;ng tư 92/2015/TT-BTC</a>.</p>
  <p>-&nbsp;C&aacute;c khoản thu nhập được miễn thuế được x&aacute;c định l&agrave; thu nhập từ phần tiền lương, tiền c&ocirc;ng l&agrave;m việc ban đ&ecirc;m, l&agrave;m th&ecirc;m giờ được trả cao hơn so với tiền lương, tiền c&ocirc;ng l&agrave;m việc ban ng&agrave;y, l&agrave;m việc trong giờ theo quy định của ph&aacute;p luật. (Xem th&ecirc;m tại Điểm i Khoản 1 Điều 3&nbsp;<a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" target="_blank" rel="noopener noreferrer">Th&ocirc;ng tư 111/2013/TT-BTC</a>).</p>
  <p><strong>* C&aacute;c khoản giảm trừ bao gồm c&aacute;c khoản giảm trừ gia cảnh:</strong></p>
  <p>-&nbsp;Đối với người nộp thuế: Mức giảm trừ gia cảnh l&agrave; 11 triệu đồng/th&aacute;ng, 132 triệu đồng/năm.</p>
  <p>-&nbsp;Đối với người phụ thuộc: Mức giảm trừ gia cảnh l&agrave; 4,4 triệu đồng/người/th&aacute;ng.</p>
  <p>-&nbsp;Ngo&agrave;i ra, giảm trừ gia cảnh c&ograve;n bao gồm c&aacute;c khoản đ&oacute;ng bảo hiểm, quỹ hưu tr&iacute; tự nguyện theo hướng dẫn tại Khoản 2 Điều 9&nbsp;<a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" target="_blank" rel="noopener noreferrer">Th&ocirc;ng tư 111/2013/TT-BTC</a>. V&agrave; c&aacute;c khoản đ&oacute;ng g&oacute;p từ thiện, nh&acirc;n đạo, khuyến học theo hướng dẫn tại Khoản 3 Điều 9&nbsp;<a href="https://thuvienphapluat.vn/van-ban/Thue-Phi-Le-Phi/Thong-tu-111-2013-TT-BTC-Huong-dan-Luat-thue-thu-nhap-ca-nhan-va-Nghi-dinh-65-2013-ND-CP-205356.aspx" target="_blank" rel="noopener noreferrer">Th&ocirc;ng tư 111/2013/TT-BTC</a>.</p>
  <p><strong>* Thuế suất:</strong></p>
  <p>Thuế suất từ tiền lương, tiền c&ocirc;ng đối với đối tượng k&yacute; hợp đồng lao động từ 03 th&aacute;ng trở l&ecirc;n được &aacute;p dụng theo lũy tiến từng phần, cụ thể:</p>
  <div dir="ltr" align="left">
  <figure class="table">
  <table class="table table-bordered">
  <tbody>
  <tr>
  <td>
  <p>Bậc</p>
  </td>
  <td>
  <p>Phần thu nhập t&iacute;nh thuế/năm</p>
  <p>(triệu đồng)</p>
  </td>
  <td>
  <p>Phần thu nhập t&iacute;nh thuế/th&aacute;ng</p>
  <p>(triệu đồng)</p>
  </td>
  <td>
  <p>Thuế suất (%)</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>1</p>
  </td>
  <td>
  <p>Đến 60</p>
  </td>
  <td>
  <p>Đến 5</p>
  </td>
  <td>
  <p>5</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>2</p>
  </td>
  <td>
  <p>Tr&ecirc;n 60 đến 120</p>
  </td>
  <td>
  <p>Tr&ecirc;n 5 đến 10</p>
  </td>
  <td>
  <p>10</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>3</p>
  </td>
  <td>
  <p>Tr&ecirc;n 120 đến 216</p>
  </td>
  <td>
  <p>Tr&ecirc;n 10 đến 18</p>
  </td>
  <td>
  <p>15</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>4</p>
  </td>
  <td>
  <p>Tr&ecirc;n 216 đến 384</p>
  </td>
  <td>
  <p>Tr&ecirc;n 18 đến 32</p>
  </td>
  <td>
  <p>20</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>5</p>
  </td>
  <td>
  <p>Tr&ecirc;n 384 đến 624</p>
  </td>
  <td>
  <p>Tr&ecirc;n 32 đến 52</p>
  </td>
  <td>
  <p>25</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>6</p>
  </td>
  <td>
  <p>Tr&ecirc;n 624 đến 960</p>
  </td>
  <td>
  <p>Tr&ecirc;n 52 đến 80</p>
  </td>
  <td>
  <p>30</p>
  </td>
  </tr>
  <tr>
  <td>
  <p>7</p>
  </td>
  <td>
  <p>Tr&ecirc;n 960</p>
  </td>
  <td>
  <p>Tr&ecirc;n 80</p>
  </td>
  <td>
  <p>35</p>
  </td>
  </tr>
  </tbody>
  </table>
  </figure>
  </div>`

}
