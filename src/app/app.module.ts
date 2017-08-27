import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


const firebase = {
    apiKey: "*******zYKak13****00pUGjqBEOCS*******",
    authDomain: "*****bismillah-ybm****.***fir***ebaseapp.com",
    databaseURL: "https://****bismillah-ybm*****.firebaseio.com",
    projectId: "***bismillah***-ybm*****",
    storageBucket: "****bismillah-ybm.appspot****.com",
    messagingSenderId: "****6899543****13399*****"
};

@NgModule({
  declarations: [
    MyApp,
    RegisterPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // auth != null
    FirebaseServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseServiceProvider
  ]
})
export class AppModule {}
