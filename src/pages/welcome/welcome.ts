import {Component, ViewChild} from '@angular/core';
import { Slides, NavController } from 'ionic-angular';
import {AdvertListPage} from '../advert-list/advert-list';
import {ProfileUpdatePage} from '../profile-update/profile-update';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController) {
    }

    ngAfterViewInit() {
        this.slides.pager = true;
    }

    openAdvertList() {
        this.navCtrl.push(AdvertListPage);
    }

    openProfileUpdatePage() {
        this.navCtrl.push(ProfileUpdatePage);
    }
}