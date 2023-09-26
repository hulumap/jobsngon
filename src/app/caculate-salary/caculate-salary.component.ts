import { Component, OnInit } from '@angular/core';
import Cleave from 'cleave.js';
@Component({
  selector: 'app-caculate-salary',
  templateUrl: './caculate-salary.component.html',
  styleUrls: ['./caculate-salary.component.scss']
})
export class CaculateSalaryComponent implements OnInit {
  panelOpenState = false;

  data: any = [{
    title: "Lương Gross là gì?",
    answer: "Lương Gross là tổng số tiền mà người lao động nhận được trước khi trừ các khoản thuế, bảo hiểm, phụ cấp và các chi phí khác. Đây là số tiền thường được đưa ra khi đàm phán về mức lương và được thông báo trong hợp đồng lao động.",
    expand: false
  },
  {
    title: "Lương Net là gì?",
    answer: "Lương Net là lương thực nhận của người lao động sau khi đã trừ hết các khoản bảo hiểm, thuế thu nhập cá nhân và các chi phí khấu trừ khác. Lương Net sẽ thấp hơn lương Gross do phải trừ đi các khoản thuế phí.",
    expand: false
  },
  {
    title: "Công thức tính lương Gross là gì?",
    answer: "Lương Gross = Lương cơ bản + Thưởng + Thuế thu nhập cá nhân + Bảo hiểm xã hội + Bảo hiểm y tế + Bảo hiểm thất nghiệp + Các khoản chi phí khác",
    expand: false
  },
  {
    title: "Công thức tính lương Net là gì?",
    answer: "Lương Net = Tổng thu nhập - (Thuế thu nhập cá nhân + Bảo hiểm xã hội + Bảo hiểm y tế + Bảo hiểm thất nghiệp + Các khoản khấu trừ khác)",
    expand: false
  },
  {
    title: "Cách tính lương Gross sang Net?",
    answer: `Sau khi trừ đi các khoản phí và thuế trên lương Gross, ta sẽ thu được số tiền lương Net. Công thức chung để tính lương Gross sang Net là:
    Lương Net = Lương Gross - (Thuế thu nhập cá nhân + Bảo hiểm xã hội + Bảo hiểm y tế + Bảo hiểm thất nghiệp + Các khoản khấu trừ khác)`,
    expand: false
  },
  {
    title: "Cách quy đổi lương Net sang Gross?",
    answer: `Để quy đổi lương Net sang lương Gross, ta cần tính toán lại các khoản phí và thuế đã bị trừ đi từ lương Gross. Công thức quy đổi từ lương Net sang lương Gross như sau:
    Lương Gross = Lương Net + Thuế thu nhập cá nhân + Bảo hiểm xã hội + Bảo hiểm y tế + Bảo hiểm thất nghiệp + Các khoản chi phí khác`,
    expand: false
  }
  ]

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
  constructor() { }

  ngOnInit(): void {
  }


  //  format nhập mức lương
  cleaveSalary: any;
  cleaveBhxh: any
  ngAfterViewInit() {
    this.cleaveSalary = new Cleave('.input-salary', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    });
    this.cleaveBhxh = new Cleave('.input-bhxh', {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
    });
  }

  caculate(value) {
    let salary = parseInt(this.cleaveSalary.getRawValue());
    this.gross = 0
    this.net = 0
    if (value == 'gross') {
      this.gross = salary
      this.caculateBh()
      // tax 
      this.salary_before_tax = this.gross - (this.bhxh + this.bhyt + this.bhtn)
      this.salary_after_tax = this.salary_before_tax - this.tax_reduce - (this.number_person * this.person_reduce)
      this.tax_total = this.caculateTax(this.salary_after_tax)
      this.net = this.gross - (this.bhxh + this.bhyt + this.bhtn + this.tax_total)
    }
    else {
      this.net = salary
      // this.salary_before_tax = this.net + (this.number_person * this.person_reduce)
      // bh
      // if (this.value_bhxh == 'A') {
      //   let value = this.gross <= 36000000 ? this.gross : 36000000
      //   this.bhxh = 0.08 * value
      //   ///  // tính lại thằng này theo mức lương vùng và lương tổng
      //   this.bhtn = 936000
      //   this.bhyt = 0.015 * value
      // }
      // else {
      //   let input_bhxh = parseInt(this.cleaveBhxh.getRawValue())
      //   this.bhxh = input_bhxh * 0.08
      //   this.bhtn = 0.01 * input_bhxh
      //   this.bhyt = 0.015 * input_bhxh
      // }

      // tax 
      // this.salary_before_tax = this.gross - (this.bhxh + this.bhyt + this.bhtn)
      // this.salary_after_tax = this.salary_before_tax - this.tax_reduce - (this.number_person * this.person_reduce)
      // this.tax_total = this.caculateTax(this.salary_after_tax)
      this.gross = this.net + ((0.08 * this.gross) + 936000 + (0.01 * this.gross))
    }
  }

  caculateBh() {
    let value_bhtn
    if (this.value_area == "1") value_bhtn = 936000
    if (this.value_area == "2") value_bhtn = 832000
    if (this.value_area == "3") value_bhtn = 728000
    if (this.value_area == "4") value_bhtn = 650000

    if (this.value_bhxh == 'A') {
      let value = this.gross <= 36000000 ? this.gross : 36000000
      this.bhxh = 0.08 * value
      this.bhtn = (this.gross * 0.01) > value_bhtn ? value_bhtn : (this.gross * 0.01)
      this.bhyt = 0.015 * value
    }
    else {
      let input_bhxh = parseInt(this.cleaveBhxh.getRawValue())
      this.bhxh = input_bhxh * 0.08
      this.bhtn = 0.01 * (input_bhxh * 0.01) > value_bhtn ? value_bhtn : (input_bhxh * 0.01)
      this.bhyt = 0.015 * input_bhxh
    }
  }

  caculateTax(income) {
    let tax = 0;
    const taxDetails: { minIncome: number, maxIncome: number, taxRate: number, taxAmount: number }[] = [];
    // Xác định các mức thuế và mức thuế tương ứng
    const taxBrackets = [
      { minIncome: 0, maxIncome: 5000000, taxRate: 0.05 },
      { minIncome: 5000001, maxIncome: 10000000, taxRate: 0.10 },
      { minIncome: 10000001, maxIncome: 18000000, taxRate: 0.15 },
      { minIncome: 18000001, maxIncome: 32000000, taxRate: 0.20 },
      { minIncome: 32000001, maxIncome: 52000000, taxRate: 0.25 },
      { minIncome: 52000001, maxIncome: 80000000, taxRate: 0.30 },
      { minIncome: 80000001, maxIncome: Infinity, taxRate: 0.35 },
    ];

    // Tính thuế dựa trên thu nhập
    for (let bracket of taxBrackets) {
      if (income > bracket.minIncome) {
        const taxableAmount = Math.min(income, bracket.maxIncome) - bracket.minIncome;
        tax += taxableAmount * bracket.taxRate;
        const taxAmount = taxableAmount * bracket.taxRate;
        // Làm tròn số tiền thuế tới 2 chữ số thập phân
        const roundedTaxAmount = parseFloat(taxAmount.toFixed(0));
        taxDetails.push({ ...bracket, taxAmount: roundedTaxAmount });
        console.log(taxDetails)
      }
    }

    return tax;
  }
}
