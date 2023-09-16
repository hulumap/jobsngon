export class Resume {
  title: string; // tiêu đề cv
  goal: any; // dữ liệu mục tiêu
  info: any; // dữ liệu thông tin cv
  theme: any; // mầu sắc, ngôn ngữ..
  data_eec: any; // dữ liệu kinh nghiệm, học vấn, hoạt động, dự án, data_eec,
  data_adr: any; // dữ liệu thông tin thêm, người tham chiếu, data_adr
  data_slc: any; // dữ liệu kỹ năng, yêu thích, chứng chỉ, ngoại ngữ, giải thưởng, data_lang
  uid: any; // nâng cấp để tạo nhìu cv, get cv về theo uid, vừa làm pass mở khi bán, hoặc nghiên cứu API firebase funtions tích hợp thanh toán
  layout: any; // nâng cấp chọn layout cho mỗi loại cv, mỗi cv 3 loại, hoặc nghiên kéo thả các mcuj
  typeCv: any; // nâng cấp nhìu cv, để biết CV loại nào, hiện tại 1 cv, nên khi vô mẫu nào lưu loại mẫu đó.
  //////////////////////////////
  date: any = new Date();
  constructor(lang?) {
    if (lang == "jp") this.initJapan()
    else if (lang == "vi") this.initVietnam()
    else this.initEnglang()
  }

  initVietnam() {
    this.typeCv = 6
    this.title = "Kỹ sư điện",
      this.goal = {
        title: "Mục tiêu",
        status: true,
        titleStatus: "Mục tiêu",
        value: "Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về thị trường để trở thành một nhân viên hàng chuyên nghiệp, mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng số lượng khách hàng và mở rộng tập khách hàng."
      },
      this.info = {
        title: "Thông tin liên hệ",
        img: "assets/sample.jpg",
        dateBirth: "01/02/1994",
        sex: "Nam",
        spaddress: "",
        spelling: "",
        phone: "123456789",
        email: "jobsngon@gmail.com",
        name: "Nguyen Văn A",
        address: "50 Hoàng Văn Thụ, quận Tân Bình, TPHCM",
        web: "https://www.facebook.com/abc"
      },

      this.theme = {
        font: 12,
        name: 24,
        title: 14,
        fontfamily: "Times New Roman",
        padding: 16,
        color: "#00b04f",
        lang: "vi",
      },
      this.data_eec = [  /// dữ liệu giống nhau như học vẫn, kinh nghiệm. dự án, hoạt động
        {
          title: "Trình độ học vấn",
          status: true,
          titleStatus: "Trình độ học vấn",
          data: [
            {
              name: "Trường đại học JOBSNGON",
              describe: "GDA: 3.8",
              end: "05/2017",
              position: "Công nghệ kỹ thuật điện",
              start: "07/2013"
            }
          ]
        },
        {
          title: "Kinh nghiệm làm việc",
          status: true,
          titleStatus: "Kinh nghiệm làm việc",
          data: [
            {
              name: "Công ty cổ phần JOBSNGON",
              describe: "- Hỗ trợ viết bài quảng cáo sản phẩm qua kênh facebook, các forum,...\n- Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email.",
              end: "05/2017",
              position: "Nhân viên văn phòng",
              start: "07/2014"
            }
          ]
        },
        {
          title: "Hoạt động",
          status: true,
          titleStatus: "Hoạt động",
          data: [
            {
              describe: "Tập hợp các món quà và phân phát tới người vô gia cư.\n- Chia sẻ, động viên họ vượt qua giai đoạn khó khăn, giúp họ có những suy nghĩ lạc quan.",
              end: "Jan 2015",
              name: "Tình nguyện viên nhóm JOBSNGON",
              position: "Tình nguyện viên",
              start: "08/2014"
            }
          ]
        },
        {
          title: "Dự án",
          status: true,
          titleStatus: "Dự án",
          data: [
            {
              describe: "Điều khiển các thiết, bằng smartphone",
              end: "09/2014",
              position: "Nhân viên phát triển",
              name: "Phần mềm điều khiển từ xa",
              start: "09/2013"
            }
          ]
        },
      ],
      this.data_slc = [
        {
          title: "Kỹ năng",
          status: true,
          titleStatus: "Kỹ năng",
          data: [
            {
              describe: "Word, Excel",
              name: "Tin học",
              value: 90
            }
          ]
        },
        {
          title: "Yêu thích",
          status: true,
          titleStatus: "Yêu thích",
          data: [
            {
              value: "- Bóng đá\n- Âm nhạc."
            }
          ]
        },
        {
          title: "Chứng chỉ",
          status: true,
          titleStatus: "Chứng chỉ",
          data: [
            {
              name: "2020",
              value: "Chứng Chỉ N1"
            }
          ]
        },
        {
          title: "Giải thưởng",
          status: true,
          titleStatus: "Giải thưởng",
          data: [
            {
              name: "2020",
              value: "Nhân viên xuất sắc năm công ty JOBSNGON"
            }
          ]
        },
        {
          title: "Ngôn ngữ",
          status: false,
          titleStatus: "Ngôn ngữ",
          data: [
            {
              name: "Tiếng anh",
              value: "990 TOEIC"
            }
          ]
        },
      ],
      this.data_adr = [  /// dữ liệu giống nhau như thông tin thêm, người tham chiếu .....
        {
          title: "Thông tin thêm",
          status: true,
          titleStatus: "Thông tin thêm",
          value: "Tham giá khóa học tại JOBSNGON."
        },
        {
          title: "Người tham chiếu",
          status: true,
          titleStatus: "Người tham chiếu",
          value: "Tran Van B\nGiám đốc công ty JOBSNGON JSC\nEmail: ...\nMobile: ...."
        }
      ]
  }
  initEnglang() {
    this.title = "Electrical Engineer",
      this.goal = {
        title: "Objective",
        status: true,
        titleStatus: "Mục tiêu",
        value: "Take advantages of sales skills & experience and understanding of market to become a professional Sales Staff and bring a lot value to Customers. From that, I will contribute to development of JOBSNGON Company."
      },
      this.info = {
        title: "Contact Information",
        img: "assets/sample.jpg",
        dateBirth: "01/02/1994",
        sex: "Male",
        spaddress: "",
        spelling: "",
        phone: "123456789",
        email: "jobsngon@gmail.com",
        name: "Nguyen Văn A",
        address: "50 Hoàng Văn Thụ, quận Tân Bình, TPHCM",
        web: "https://www.facebook.com/abc"
      },

      this.theme = {
        font: 12,
        name: 24,
        title: 14,
        fontfamily: "Roboto",
        padding: 16,
        color: "#00b04f",
        lang: "en",
      },
      this.data_eec = [  /// dữ liệu giống nhau như học vẫn, kinh nghiệm. dự án, hoạt động
        {
          title: "Education",
          status: true,
          titleStatus: "Trình độ học vấn",
          data: [
            {
              name: "JOBSNGON Universityy",
              describe: "GPA: 3.6/4",
              end: "May 2014",
              position: "Electrical",
              start: "07/2014"
            }
          ]
        },
        {
          title: "Work Experience",
          status: true,
          titleStatus: "Kinh nghiệm làm việc",
          data: [
            {
              name: "JOBSNGON Company Limited",
              describe: "Main responsibilities:\n- Write and upload product advertising post via Facebook, Forum...\n- Introduce, consult products and answer customers' queries via phone and email.\n- Assist to control goods in and out\n- Attend Sales Skill Course in the Company\nRecognition and Gains:\n- Advertising products of the Company to customers effectively: contribute to a 20% increase in the number of customers within one month of working",
              end: "June 2017",
              position: "Trainee",
              start: "June 2014"
            }
          ]
        },
        {
          title: "Activities",
          status: true,
          titleStatus: "Hoạt động",
          data: [
            {
              describe: "Gather the gifts and distribute to the homeless. \n - Share, encourage them to overcome difficult times, help them have optimistic thoughts.",
              end: "Jan 2015",
              name: "Volunteer group JOBSNGON",
              position: "Volunteer",
              start: "08/2014"
            }
          ]
        },
        {
          title: "Project",
          status: true,
          titleStatus: "Dự án",
          data: [
            {
              describe: "Control devices with smartphones",
              end: "09/2014",
              position: "Development staff",
              name: "Remote software control",
              start: "09/2013"
            }
          ]
        },
      ],
      this.data_slc = [
        {
          title: "Skills",
          status: true,
          titleStatus: "Kỹ năng",
          data: [
            {
              describe: "Word, Excel",
              name: "Office",
              value: 90
            }
          ]
        },
        {
          title: "Interests",
          status: true,
          titleStatus: "Yêu thích",
          data: [
            {
              value: "- Football\n- Music."
            }
          ]
        },
        {
          title: "Certifications",
          status: true,
          titleStatus: "Chứng chỉ",
          data: [
            {
              name: "2020",
              value: "N1 Japan"
            }
          ]
        },
        {
          title: "Award",
          status: true,
          titleStatus: "Giải thưởng",
          data: [
            {
              name: "2020",
              value: "Excellent employee of the year JOBSNGON"
            }
          ]
        },
        {
          title: "Language",
          status: false,
          titleStatus: "Ngôn ngữ",
          data: [
            {
              name: "English",
              value: "990 TOEIC"
            }
          ]
        },
      ],
      this.data_adr = [  /// dữ liệu giống nhau như thông tin thêm, yêu thích .....
        {
          title: "Additonal Information",
          status: true,
          titleStatus: "Thông tin thêm",
          value: "JOBSNGON Scholarship in 2nd semester 2012-2013 and 1st semester 2013-2014."
        },
        {
          title: "Reference Person",
          status: true,
          titleStatus: "Người tham chiếu",
          value: "Tran Van B\nDirector of JOBSNGON JSC\nEmail: ...\nMobile: ..."
        }
      ]
  }
  initJapan() {
    this.title = "電気技師",
      this.goal = {
        title: "目標",
        status: true,
        titleStatus: "Mục tiêu",
        value: "営業スキル、経験、市場理解を活用して、プロの営業スタッフになり、顧客に多くの価値をもたらします。そして、JOBSNGONの発展に貢献していきます。"
      },
      this.info = {
        title: "連絡先住所",
        img: "assets/sample.jpg",
        dateBirth: "01/02/1994",
        sex: "おとこ",
        spaddress: "",
        spelling: "",
        phone: "123456789",
        email: "jobsngon@gmail.com",
        name: "Nguyen Văn A",
        address: "50 Hoàng Văn Thụ, quận Tân Bình, TPHCM",
        web: "https://www.facebook.com/abc"
      },

      this.theme = {
        font: 12,
        name: 24,
        title: 14,
        fontfamily: "ms mincho, TakaoPGothic, takao pゴシック, ヒラギノ角ゴ pro w3, hiragino kaku gothic pro, Osaka, メイリオ, Meiryo, ＭＳ Ｐゴシック, ms pgothic, sans-serif",
        padding: 16,
        color: "#00b04f",
        lang: "jp",
      },
      this.data_eec = [  /// dữ liệu giống nhau như học vẫn, kinh nghiệm. dự án, hoạt động
        {
          title: "教育",
          status: true,
          titleStatus: "Trình độ học vấn",
          data: [
            {
              name: "JOBSNGON大学",
              describe: "GPA: 3.6/4",
              end: "2014年5月",
              position: "電気工学",
              start: "2014年7月"
            }
          ]
        },
        {
          title: "実務経験",
          status: true,
          titleStatus: "Kinh nghiệm làm việc",
          data: [
            {
              name: "JOBSNGON Company Limited",
              describe: "主な責任：\n -Facebook、フォーラムを介して製品広告の投稿を作成およびアップロードします... \n -製品を紹介し、相談し、電話や電子メールを介して顧客の質問に答えます。\n -商品の出入りを管理するのを支援します\n -出席します会社のセールススキルコース\n認識と利益：\n-会社の製品を顧客に効果的に宣伝する：就業後1か月以内に顧客数を20％増加させることに貢献します",
              end: "2017年6月",
              position: "研修生",
              start: "2014年6月"
            }
          ]
        },
        {
          title: "活動",
          status: false,
          titleStatus: "Hoạt động",
          data: [
            {
              describe: "贈り物を集めてホームレスに配りましょう。 \n-共有し、困難な時期を乗り越えるように促し、楽観的な考えを持つのを助けます。",
              end: "2015年6月",
              name: "ボランティアグループJOBSNGON",
              position: "ボランティア",
              start: "2015年8月"
            }
          ]
        },
        {
          title: "計画",
          status: true,
          titleStatus: "Dự án",
          data: [
            {
              describe: "スマートフォンでデバイスを制御する",
              end: "2014年9月",
              position: "開発スタッフ",
              name: "リモートソフトウェア制御",
              start: "2013年9月"
            }
          ]
        },
      ],
      this.data_slc = [
        {
          title: "スキル",
          status: true,
          titleStatus: "Kỹ năng",
          data: [
            {
              describe: "Word, Excel",
              name: "情報技術",
              value: 90
            }
          ]
        },
        {
          title: "興味",
          status: true,
          titleStatus: "Yêu thích",
          data: [
            {
              value: "-サッカー\n-音楽"
            }
          ]
        },
        {
          title: "認証",
          status: true,
          titleStatus: "Chứng chỉ",
          data: [
            {
              name: "2020",
              value: "証明書N1"
            }
          ]
        },
        {
          title: "賞",
          status: true,
          titleStatus: "Giải thưởng",
          data: [
            {
              name: "2020",
              value: "今年の優秀な従業員JOBSNGON"
            }
          ]
        },
        {
          title: "言語",
          status: false,
          titleStatus: "Ngôn ngữ",
          data: [
            {
              name: "英語",
              value: "990 TOEIC"
            }
          ]
        },
      ],
      this.data_adr = [  /// dữ liệu giống nhau như thông tin thêm, yêu thích .....
        {
          title: "追加情報",
          status: true,
          titleStatus: "Thông tin thêm",
          value: "2012-2013年第2学期および2013-2014年第1学期のJOBSNGON奨学金。"
        },
        {
          title: "参考人",
          status: false,
          titleStatus: "Người tham chiếu",
          value: "トランヴァンB \n JOBSNGONJSCのディレクター\nメール：... \nモバイル：..."
        }
      ]
  }
}