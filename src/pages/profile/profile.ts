import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {AdvertListPage} from '../advert-list/advert-list';


@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {
  }

  updateUserInfo(){
  this.navCtrl.push(AdvertListPage);
  }

}
