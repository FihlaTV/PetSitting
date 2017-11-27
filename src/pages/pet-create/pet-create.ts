import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {PetService} from '../../providers/pet-service-rest';
import {PetUserListPage} from '../pet-user-list/pet-user-list';
import {ProfileUpdatePage} from '../profile-update/profile-update';



@Component({
    selector: 'page-pet-create',
    templateUrl: 'pet-create.html'
})

export class PetCreatePage {

	pet: any;

	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public PetService: PetService, public toastCtrl: ToastController) {
		
		this.pet = this.navParams.data;
        this.PetService = PetService;
    }

 	createPet(pet){
    console.log(pet);
 		this.PetService.createNewPet(pet);
  	this.navCtrl.push(ProfileUpdatePage);

  	}
}