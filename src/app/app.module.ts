import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import {AboutPage} from '../pages/about/about';
import {AdvertDetailPage} from '../pages/advert-detail/advert-detail';
import {AdvertListPage} from '../pages/advert-list/advert-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {PetPage} from '../pages/pet/pet';
import {ProfilePage} from '../pages/profile/profile';
import {WelcomePage} from '../pages/welcome/welcome';

import {AdvertService} from "../providers/advert-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    AdvertListPage,
    AdvertDetailPage,
    FavoriteListPage,
    PetPage,
    ProfilePage,
    WelcomePage,
  ],
  imports: [  
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    AdvertListPage,
    AdvertDetailPage,
    FavoriteListPage,
    PetPage,
    ProfilePage,
    WelcomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AdvertService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
