import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  DatePipe,
  LocationStrategy,
  PathLocationStrategy,
  registerLocaleData,
} from '@angular/common';
import en from '@angular/common/locales/en';
import vi from '@angular/common/locales/vi';
registerLocaleData(en);
registerLocaleData(vi);

/// firebase ///
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Jobsngon } from './service/jobsngon.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { NgZorroAntModule } from './ng-zorro-ant.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.pro),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MaterialModule,
    NgZorroAntModule,
  ],
  providers: [
    Jobsngon,
    DatePipe,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
