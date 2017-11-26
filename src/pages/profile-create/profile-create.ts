import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {UserService} from '../../providers/user-service-rest';




@Component({
    selector: 'page-profile-create',
    templateUrl: 'profile-create.html'
})

export class ProfileCreatePage {

  

    constructor(public navCtrl: NavController) {
       
        
    }   

  
}