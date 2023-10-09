import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-letter-table',
  templateUrl: './letter-table.component.html',
  styleUrls: ['./letter-table.component.scss']
})
export class LetterTableComponent implements OnInit {
  table: any = [
    {
      status: true,
      index: 0,
      name: '0 đến 50',
      sub: 'Bạn chỉ sống một lần thôi, nhưng nếu bạn sống đúng, một lần là đủ rồi'
    },
    {
      status: true,
      index: 1,
      name: '51 đến 100',
      sub: 'Khó khăn nào rồi cũng qua. Cũng giống như sau cơn mưa, trời lại sáng'
    },
    {
      status: true,
      index: 2,
      name: '101 đến 150',
      sub: 'Bất kể điều gì xảy đến với cuộc đời tôi, tôi luôn hiểu rằng: "Điều này cũng vậy, rồi sẽ qua'
    },

    {
      status: true,
      index: 3,
      name: '151 đến 200',
      sub: 'Hãy làm điều gì đó trong hôm nay để tương lai bạn sẽ cảm ơn vì điều ấy'
    },
    {
      status: true,
      index: 4,
      name: '201 đến 250',
      sub: ' Hãy để nụ cười của bạn thay đổi thế giới nhưng đừng để thế giới đổi thay nụ cười của bạn'
    },
    {
      status: true,
      index: 5,
      name: '251 đến 300',
      sub: 'Cuộc sống chỉ mang đến cho bạn 10% cơ hội, 90% còn lại là cách mà bạn phản ứng với nó'
    },

    {
      status: true,
      index: 6,
      name: '301 đến 350',
      sub: 'Hãy luyện tập như thể bạn chưa bao giờ chiến thắng. Hãy hành động như thể chưa bao giờ bạn thất bại'
    },
    {
      status: true,
      index: 7,
      name: '351 đến 400',
      sub: 'Chỉ cần bạn không dừng lại thì việc bạn tiến chậm cũng không là vấn đề'
    },
    {
      status: true,
      index: 8,
      name: '401 đến 450',
      sub: 'Khó khăn nào rồi cũng qua. Cũng giống như sau cơn mưa, trời lại sáng'
    },
    {
      status: true,
      index: 9,
      name: '451 đến 500',
      sub: 'Sự trả thù tốt nhất là một thành công vĩ đại'
    },

    {
      status: true,
      index: 10,
      name: '501 đến 550',
      sub: 'Nghị lực và kiên trì sẽ chiến thắng tât cả!'
    },
    {
      status: true,
      index: 11,
      name: '551 đến 600',
      sub: 'Không có gì trên thế giới này có thể thay thế kiên trì được'
    },
    {
      status: true,
      index: 12,
      name: '601 đến 650',
      sub: 'Kiên nhẫn, kiên trì và những giọt mồ hôi là sự kết hợp phi thường và bất bại để làm nên thành công!'
    },
    {
      status: true,
      index: 13,
      name: '651 đến 700',
      sub: ' Không có gì là không thể với một người luôn biết cố gắng'
    },
    {
      status: true,
      index: 14,
      name: '701 đến 750',
      sub: 'Bạn có thể gặp nhiều thất bại nhưng không có nghĩa bạn sẽ bị nó đánh gục.'
    },
    {
      status: true,
      index: 15,
      name: '751 đến 800',
      sub: 'Tham vọng là con đường dẫn đến thành công còn kiên trì là động cơ giúp bạn đi trên con đường đó!'
    },
    {
      status: true,
      index: 16,
      name: '801 đến 850',
      sub: 'Nếu bạn đi xuống địa ngục, hãy cứ tiếp tục bước đi!'
    },

    {
      status: true,
      index: 17,
      name: '851 đến 900',
      sub: 'Tin rằng bạn có thể làm một điều gì đó đồng nghĩa với việc bạn đã đi được nửa đường đến đó'
    },
    {
      status: true,
      index: 18,
      name: '901 đến 950',
      sub: 'Những nhà vô địch sẽ tiếp tục chơi cho đến khi họ làm được!'
    }, {
      status: true,
      index: 19,
      name: '951 đến 999',
      sub: 'Nếu bạn không thể bay, vậy thì hãy chạy'
    }
  ]
  show: any[] = []
  constructor(
    private router: Router) { }

  ngOnInit() {
    this.show = this.table.map((item) => {
      let b = Math.floor(Math.random() * 19) + 1
      let img = 'assets/img/999/left/' + b + '.svg'
      return { ...item, img: img }
    })
  }
  gotoLetters(item) {
    this.router.navigate(['/doc-thu/noi-dung-thu'], { state: item.index })
  }
}
