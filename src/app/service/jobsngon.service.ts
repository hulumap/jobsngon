import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Title } from '@angular/platform-browser';
import { NzI18nService, vi_VN, en_US } from 'ng-zorro-antd/i18n';
import localforage from 'localforage';
@Injectable({
  providedIn: 'root',
})
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
  ) { }



  setTitle(title) {
    this.titleService.setTitle(title);
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


  onAuthStateChanged() {
    return new Promise((resolve, rejects) => {
      this.afAuth
        .onAuthStateChanged((user) => {
          if (user) {
            this.currentUser = user
            this.getInfo().then(
              (data) => {
                if (data) {
                  this.setLocalData('info', data)
                    .then(() => {
                      resolve(data);
                    })
                } else resolve(user)
              },
              (err) => rejects(err)
            );
          } else resolve(false)

        })
        .catch((err) => rejects(false));
    });
  }



  getInfo() {
    return new Promise<any>((resolve, reject) => {
      firebase
        .firestore()
        .collection('customers')
        .where('link', '==', "link")
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

}
