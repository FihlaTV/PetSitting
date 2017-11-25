import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserService} from '../../providers/user-service-rest';


@Component({
    selector: 'page-profile-detail',
    templateUrl: 'profile-detail.html'
})

export class ProfileDetailPage {

  user: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public UserService: UserService, public toastCtrl: ToastController) {
        this.user = this.navParams.data;
        UserService.findById("5a104f9cf053ae624c001662").then(
            user => this.user = user
        );
        this.UserService = UserService;
    }   

}