import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';




import {AboutPage} from '../pages/about/about';
import {DashboardPage} from '../pages/dashboard/dashboard';

import {AdvertDetailPage} from '../pages/advert-detail/advert-detail';
import {AdvertListPage} from '../pages/advert-list/advert-list';
import {AdvertUpdatePage} from '../pages/advert-update/advert-update';

import {PetDetailPage} from '../pages/pet-detail/pet-detail';
import {PetUpdatePage} from '../pages/pet-update/pet-update';
import {PetCreatePage} from '../pages/pet-create/pet-create';
import {PetUserListPage} from '../pages/pet-user-list/pet-user-list';

import {ProfileDetailPage} from '../pages/profile-detail/profile-detail';
import {ProfileUpdatePage} from '../pages/profile-update/profile-update';
import {ProfileCreatePage} from '../pages/profile-create/profile-create';

import {WelcomePage} from '../pages/welcome/welcome';




import {AdvertService} from "../providers/advert-service-rest";
import {UserService} from "../providers/user-service-rest";
import {PetService} from "../providers/pet-service-rest";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    DashboardPage,
    AdvertDetailPage,
    AdvertListPage,
    AdvertUpdatePage,
    PetDetailPage,
    PetUpdatePage,
    PetCreatePage,
    PetUserListPage,
    ProfileDetailPage,
    ProfileUpdatePage,
    ProfileCreatePage,
    WelcomePage
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
    DashboardPage,
    AdvertDetailPage,
    AdvertListPage,
    AdvertUpdatePage,
    PetDetailPage,
    PetUpdatePage,
    PetCreatePage,
    PetUserListPage,
    ProfileDetailPage,
    ProfileUpdatePage,
    ProfileCreatePage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AdvertService,
    PetService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
