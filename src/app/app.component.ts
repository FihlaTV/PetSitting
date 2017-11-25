import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';



import {AboutPage} from '../pages/about/about';

import {AdvertDetailPage} from '../pages/advert-detail/advert-detail';
import {AdvertListPage} from '../pages/advert-list/advert-list';
import {AdvertUpdatePage} from '../pages/advert-update/advert-update';

import {PetDetailPage} from '../pages/pet-detail/pet-detail';
import {PetUpdatePage} from '../pages/pet-update/pet-update';
import {PetUserListPage} from '../pages/pet-user-list/pet-user-list';

import {ProfileDetailPage} from '../pages/profile-detail/profile-detail';
import {ProfileUpdatePage} from '../pages/profile-update/profile-update';

import {WelcomePage} from '../pages/welcome/welcome';






export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = WelcomePage;

    appMenuItems: Array<MenuItem>;

    helpMenuItems: Array<MenuItem>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        this.appMenuItems = [
            {title: 'Welcome', component: WelcomePage, icon: 'bookmark'},
            {title: 'Find a pet sitter', component: AdvertListPage, icon: 'contacts'},
            {title: 'Start pet sitting (same as above!)', component: AdvertListPage, icon: 'happy'}
        ];

        this.helpMenuItems = [
            {title: 'My profile', component: ProfileDetailPage, icon: 'contact'},
            {title: 'About', component: AboutPage, icon: 'information-circle'},
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleLightContent();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }
}
