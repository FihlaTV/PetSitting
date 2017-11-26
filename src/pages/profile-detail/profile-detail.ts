import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserService} from '../../providers/user-service-rest';

import {ProfileUpdatePage} from '../profile-update/profile-update';

import {PetUserListPage} from '../pet-user-list/pet-user-list';


@Component({
    selector: 'page-profile-detail',
    templateUrl: 'profile-detail.html'
})

export class ProfileDetailPage {

  user: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public toastCtrl: ToastController) {
        this.user = this.navParams.data;
        UserService.findById(this.user.id).then(
            user => this.user = user
        );
        this.UserService = UserService;
    }   

    updateMyProfile(){
    this.navCtrl.push(ProfileUpdatePage);
    }

    openPetList() {
    this.navCtrl.push(PetUserListPage);
    }
}