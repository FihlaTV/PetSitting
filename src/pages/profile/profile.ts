import { Component } from '@angular/core';

import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {AdvertListPage} from '../advert-list/advert-list';

import {UserService} from '../../providers/user-service-rest';


@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html'
})

export class ProfilePage {

 user: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public toastCtrl: ToastController) {
        this.user = this.navParams.data;
        UserService.findById(this.user.id).then(
            user => this.user = user
        );

    }   

  updateUserInfo(user){
  this.navCtrl.push(ProfilePage, user);
  }

}