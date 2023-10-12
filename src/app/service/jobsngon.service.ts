import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Title } from '@angular/platform-browser';
import { NzI18nService, vi_VN, en_US } from 'ng-zorro-antd/i18n';
import localforage from 'localforage';
import jsPDF from 'jspdf';
import domToImage from "dom-to-image";
import { NzMessageService } from 'ng-zorro-antd/message';
import { Resume } from './resume';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Jobsngon {
  currentUser: firebase.User;
  constructor(
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    private i18n: NzI18nService,
    private storage: AngularFireStorage,
    private titleService: Title,
    private message: NzMessageService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.switchLanguage('vi');
  }


  sort_Date(dataArr, sort = 'asc' || 'desc') {
    if (sort == 'asc') {
      let asc = dataArr.sort((a, b) => {
        return b.date_created.seconds * 1000 - a.date_created.seconds * 1000;
      });
      return asc;
    } else {
      let desc = dataArr.sort((a, b) => {
        return a.date_created.seconds * 1000 - b.date_created.seconds * 1000;
      });
      return desc;
    }
  }

  // local storage 


  public addData(key: string, data: any) {
    let a = JSON.parse(localStorage.getItem(key))
    if (!a) localStorage.setItem(key, JSON.stringify([data]));
    else {
      a.push(data)
      localStorage.setItem(key, JSON.stringify(a));
    }
  }
  /**
  * Get Value
  */
  public getData(key: string): any {
    return JSON.parse(localStorage.getItem(key));
  }
  /**
   * delete Value
   */
  public deleteData(key: string, data: any) {
    let a = JSON.parse(localStorage.getItem(key))
    if (a) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].id == data) {
          a.splice(i, 1);
        }
      }
      localStorage.setItem(key, JSON.stringify(a));
    }
  }
  /**
  * delete Value
  */
  public deleteQuote(key: string, data: any) {
    let a = JSON.parse(localStorage.getItem(key))
    if (a) {
      for (let i = 0; i < a.length; i++) {
        if (a[i].title == data) {
          a.splice(i, 1);
        }
      }
      localStorage.setItem(key, JSON.stringify(a));
    }
  }
  /**
  * update Value
  */



  // local /
  setTitle(title) {
    this.titleService.setTitle(title);
  }

  //**  bộ hàm cho local cv  */
  setLocalCV(value: any) {
    return new Promise((resolve, rejects) => {
      localforage.setItem(this.getUser().uid, JSON.stringify(value)).then(() => {
        resolve(true)
      }).catch(err => rejects(false))
    })

  }
  getLocalCV() {
    return new Promise((resolve, rejects) => {
      localforage.getItem(this.getUser().uid).then((data: any) => {
        resolve(JSON.parse(data))
      }).catch(err => rejects(err))
    })
  }


  setLocalData(collection, value: any) {
    return new Promise((resolve, rejects) => {
      localforage
        .setItem(collection, JSON.stringify(value))
        .then(() => {
          resolve(true);
        })
        .catch((err) => rejects(false));
    });
  }
  getLocalData(collection): any {
    return new Promise((resolve, rejects) => {
      localforage
        .getItem(collection)
        .then((data: any) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => rejects(err));
    });
  }

  /**
   * delete Value
   */
  public deleteLocalDataId(collection: string, data: any) {
    return new Promise((resolve, rejects) => {
      this.getLocalData(collection)
        .then((a) => {
          if (a) {
            for (let i = 0; i < a.length; i++) {
              if (a[i].id == data) {
                a.splice(i, 1);
              }
            }
            this.setLocalData(collection, JSON.stringify(a));
            resolve(true)
          }
        }, err => rejects(false))
    });

  }

  clearLocal(collection?) {
    return new Promise((resolve, rejects) => {
      localforage
        .clear()
        .then(() => {
          resolve(true);
        })
        .catch((err) => rejects(err));
    });
  }

  // hàm này biến chuỗi "Lý Quang Nghĩa" thành "ly quang nghia"
  changeAlias(alias) {
    let str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' '
    );
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    return str;
  }

  // hàm này biến chuỗi "Lý Quang Nghĩa" thành "ly-quang-nghia"
  nonAccentVietnamese(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    str = str.replace(/,|\+/g, '');
    return str.split(' ').join('-');
  }

  switchLanguage(key) {
    switch (key) {
      case 'vi':
        this.i18n.setLocale(vi_VN);
        break;
      default:
        this.i18n.setLocale(en_US);
        break;
    }
  }

  //**upload file */
  uploadFile(fileUpload, basePath) {
    return new Promise((resolve, reject) => {
      let r = (Math.random() + 1).toString(36).substring(7);
      const filePath = `${basePath}/${fileUpload.name + r}`;
      const storageRef = this.storage.ref(filePath);
      this.storage
        .upload(filePath, fileUpload)
        .then(() => {
          storageRef.getDownloadURL().subscribe((link) => {
            resolve(link);
          });
        })
        .catch((err) => reject(err));
    });
  }

  deleteFile(downloadUrl) {
    if (downloadUrl)
      return this.storage.storage.refFromURL(downloadUrl).delete();
  }

  paginateArray<T>(array: T[], page: number, pageSize: number): T[] {
    let sortArr = this.shuffleArray(array);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return sortArr.slice(startIndex, endIndex)

  }

  shuffleArray(array: any[]): any[] {
    const shuffledArray = [...array]; // Tạo một bản sao của mảng ban đầu
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Hoán đổi vị trí của hai phần tử
      const temp = shuffledArray[i];
      shuffledArray[i] = shuffledArray[j];
      shuffledArray[j] = temp;
    }
    return shuffledArray;
  }


  // Firebase // 
  getUser() {
    return this.currentUser
  }

  signOut(): Promise<any> {
    return this.afAuth.signOut().then(() => {
      this.clearLocal()
    })
  }

  signInWithEmail(email: string, password: string): Promise<any> {
    return new Promise((resolve, rejects) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then((user) => {
          resolve(user)
        }, (err) => rejects(err))
    })
  }

  signUpWithEmail(value): Promise<any> {
    return new Promise((resolve, rejects) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then((user) => {
          let data = {
            'email': user.user.email,
            "name": user.user.displayName,
            "date": new Date(),
            "photoURL": user.user.photoURL
          }
          this.afs
            .collection('info_users')
            .doc(user.user.uid)
            .set(data)
            .then((obj: any) => {
              resolve(obj);
            })
            .catch((error: any) => {
              rejects(error);
            });
        }, err => rejects(err))
    })

  }
  // signInWithGoogle(): Promise<any> {
  //   return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  // }

  /**
       * Lấy thông tin từ firestore theo UID
       * @returns IUser
       */
  getInfoUser() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        // console.log(currentUser)
        if (currentUser) {
          firebase
            .firestore()
            .collection("info_users")
            .doc(currentUser.uid)
            .get()
            .then((snapshots) => {
              if (snapshots.exists) {
                let data = { ...snapshots.data() }
                data['id'] = currentUser.uid
                resolve(data);
              } else resolve(false)
            })
            .catch((error: any) => {
              reject(error);
            });
        }
      });
    });
  }
  //** hàm update thông tin chỉnh sửa khách hàng, lưu ý, uid là id của khách hàng luôn */
  updateInfo(value) {
    let data = { ...value }
    data.date = new Date()
    return new Promise((resolve, reject) => {
      this.afAuth.user.subscribe((currentUser) => {
        this.afs
          .collection('info_users')
          .doc(currentUser.uid)
          .update(data)
          .then((obj: any) => {
            resolve(obj);
          })
          .catch((error: any) => {
            reject(error);
          });
      })
    });
  }

  /**
  * Xác thực đăng nhập(không query vào db)
  * @returns IUser
  */
  onAuthStateChanged() {
    return new Promise((resolve, rejects) => {
      this.afAuth
        .onAuthStateChanged((user) => {
          this.currentUser = user
          if (user) {
            this.getInfoUser()
              .then((data) => {
                if (data) this.setLocalData("user", data)
                resolve(data)
              }, err => rejects(false))
          } else rejects(false)
        }, err => rejects(false))
        .catch((err) => rejects(false));
    });
  }

  signInWithGoogle(): Promise<any> {
    return new Promise((resolve, rejects) => {
      this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((user) => {
          //  console.log(user)
          this.getInfoUser()
            .then((data) => {
              if (!data) {
                //console.log("chưa tồn tại", data)
                let value = {
                  'email': user.user.email,
                  "name": user.user.displayName,
                  "date": new Date(),
                  "photoURL": user.user.photoURL
                }
                this.afs
                  .collection('info_users')
                  .doc(user.user.uid)
                  .set(value)
                  .then((obj: any) => {
                    resolve(user);
                  })
                  .catch((error: any) => {
                    rejects(error);
                  });
              } else {
                resolve(user)
                //console.log("đã tồn tại", data)
              }
            })
            , err => rejects(err);
        })
    })
  }


  getJobs(uid) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .firestore()
        .collection('jobs')
        .where('uid_customer', '==', uid)
        .where('verified', '==', true)
        .where('type_post', '==', 2)
        .limit(10)
        .get()
        .then((snapshots) => {
          let data = snapshots.docs.map((item) => {
            let id = item.id;
            return { ...item.data(), id: id };
          });
          resolve(data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }




  // Tạo cv //
  // hàm xuất pdf
  exportPDF(name, html) { // hàm in CV, hoặc tải về pdf
    return new Promise((resolve, rejects) => {
      let scale = 2.5
      let data = html
      domToImage.toJpeg(data, {
        bgcolor: '#ffffff',
        width: data.clientWidth * scale,
        height: data.clientHeight * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left'
        }
      }).then((img: any) => {
        let imgWidth = data.clientWidth / 1.25;
        let imgHeight = data.clientHeight / 1.25;
        let pdf = new jsPDF("p", "pt", [imgWidth, imgHeight], true);
        pdf.addImage(img, "JPEG", 0, 0, imgWidth, imgHeight, undefined, 'FAST', 0);
        // if (imgHeight> 100) {
        //   pdf.addPage();
        // }
        pdf.save(name + '.pdf')
        this.message.create('success', 'Tải cv thành công')
        resolve(true)
      }, err => rejects(false))
    })
  }

  /** Hàm cho resume */

  saveResumeToDb(value) {
    let currentUser = firebase.auth().currentUser.uid;
    return new Promise((resolve, reject) => {
      this.afs
        .collection("dataCV").doc(currentUser)
        .set(value)
        .then((obj: any) => {
          resolve(obj);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }

  saveResume(resume, type?) { // hàm lưu thêm dữ liệu màu sắc, ngôn ngữ cv
    return new Promise((resolve, reject) => {
      if (resume.email !== "jobsngon@gmail.com" && resume.phone !== "123456789") {
        let data = { ...resume }
        data.date = new Date()
        data.uid = this.getUser().uid
        data.typeCv = type
        this.setLocalCV(data).then((bol) => {
          if (bol) {
            this.getLocalCV().then((data) => {
              this.saveResumeToDb(data).then(() => {
                resolve(true)
                this.message.create('success', 'Lưu thông tin thành công')
              }, err => reject(err)).catch((err) => alert('Có lỗi xảy ra vui lòng thử lại'))
            })
          }
        })
      } else this.message.create('error', "Vui lòng nhập số điện thoại và email");
    })
  }

  getResumeFromDb() {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if (currentUser) {
          firebase.firestore().
            collection('dataCV').doc(currentUser.uid).
            get().then(snapshots => {
              resolve(snapshots.data());
            })
            .catch((error: any) => {
              reject(error);
            });
        }
      })
    })
  }

  getResume(lang?) {
    return new Promise<any>((resolve, reject) => {
      let resume
      this.getLocalCV().then((dataLocal: any) => { // lấy dữ liệu local về trước
        if (!dataLocal) { // kiểm tra trong local chưa có dữ liệu, tiến hành lấy từ firebase về
          this.getResumeFromDb().then((data) => {
            if (!data) { // kiểm tra firebase kg có dữ liệu, lấy dữ liệu mẫu
              resume = new Resume(lang)
            }
            else { // nếu có dữ liệu từ firebase, lấy dữ liệu ừ firebase
              resume = data
              this.setLocalCV(resume) // tiến hành lưu dữ liệu vào local
            }
            resolve(resume)
          }, err => reject(err))
        } else { // nếu có dữ liệu từ local
          resume = dataLocal
          resolve(resume)
        }
      })
    })
  }

  /** Hàm lấy cv online*/
  getResumeOnline(id) {
    return new Promise<any>((resolve, reject) => {
      firebase.firestore().
        collection('dataCV').doc(id).
        get().then(snapshots => {
          resolve(snapshots.data());
        })
        .catch((error: any) => {
          reject(error);
        });
    })
  }
  changeLang(lang, dataresume, local?) { // hàm lấy ngôn ngữ cho CV, đồng thời thay đổi ngôn ngữ cho cv
    let resume
    if (local) resume = dataresume
    else resume = { ...new Resume(lang) }
    return resume
  }
  setDefault(lang) {
    let resume = { ...new Resume(lang) }
    this.message.create('success', 'Đặt lại dữ liệu thành công')
    return resume
  }


  viewOnline(resume, number) { // hàm xem cv online
    let id = this.getUser().uid + number // biến truyên qua dữ liệ online bằng UID + "2" để ẩn hiện các Template
    let url = this.router.serializeUrl(
      this.router.createUrlTree([`/online/${id}/${this.nonAccentVietnamese(resume.info.name)}`])
    );
    window.open(url, '_blank');
  }

  copy(resume) { // copy link cv online
    let path = "https://cv.jobsngon.com/online/" + this.getUser().uid + '1' + '/' + this.changeAlias(resume.info.name)
    navigator.clipboard.writeText(path);
    this.message.create('success', "Đã copy liên kết")
  }
  upLogo(event) {
    return new Promise((resolve, reject) => {
      this.message.create('loading', 'Đang tải ảnh...');
      const file = event.target.files.item(0);
      let size = file.size
      if (size <= 500000) {
        this
          .uploadFile(file, `/hinh-cv/${this.getUser().uid}`)
          .then(
            (downloadURL: any) => {
              resolve(downloadURL)
              this.message.create('success', 'Tải ảnh thành công');
            },
            (error) => {
              reject(error)
              this.message.create('warning', 'Tải ảnh thất bại, vui lòng thử lại');
              console.log(error);
            }
          )
          .catch((error) => {
            reject(error)
            this.message.create('warning', 'Tải ảnh thất bại, vui lòng thử lại');
            console.log(error);
          });
      } else this.message.create('warning', 'Tải file < 500Kb');
    })
  }


  // tương tác trực tiếp trên web

  public getJSON_Jobs(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('data-json')
        .doc('jobs')
        .get().then((snapshots: any) => {
          let value = snapshots.data();
          console.log(value)
          const jobsData = this.http.get(value.link).toPromise(); // Lưu giá trị vào biến

          resolve(jobsData) // Trả về giá trị
        })
        .catch((error: any) => {
          reject(error);
        });
    })
  }
  public getJSON_Company(): Promise<any> {
    return new Promise((resolve, reject) => {
      firebase
        .firestore()
        .collection('data-json')
        .doc('company')
        .get().then((snapshots: any) => {
          let value = snapshots.data();
          console.log(value)
          const jobsData = this.http.get(value.link).toPromise(); // Lưu giá trị vào biến

          resolve(jobsData) // Trả về giá trị
        })
        .catch((error: any) => {
          reject(error);
        });
    })
  }


  getDetailJobs(link) {
    return new Promise<any>((resolve, reject) => {
      firebase
        .firestore()
        .collection('jobs')
        .where('link', '==', link)
        .get()
        .then((snapshots) => {
          let data = snapshots.docs.map((item) => {
            let id = item.id;
            return { ...item.data(), id: id };
          });
          resolve(data[0]);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }


  /**
  * Lưu ý : tạo danh sách khách hàng sales
  * @param value
  */
  addCV(value) {
    let data = { ...value };
    data.date = new Date();
    return new Promise((resolve, reject) => {
      this.afs
        .collection('cvs')
        .add(data)
        .then((obj: any) => {
          resolve(obj.id);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }


  //** Hàm này dành cho apply cv */

  applyCv(cv, jobs) {
    return Promise.all([this.updateInfo({ jobs: jobs }), this.addCV(cv)])
      .then(results => {
        const setResult = results[0]; // Kết quả của setLocalCV
        const getResult = results[1]; // Kết quả của getLocalCV
        console.log('Set Local CV Result:', setResult);
        console.log('Get Local CV Result:', getResult);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}



