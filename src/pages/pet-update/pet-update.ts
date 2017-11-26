import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';

import {PetService} from '../../providers/pet-service-rest';

import {PetUserListPage} from '../pet-user-list/pet-user-list';



@Component({
    selector: 'page-pet-update',
    templateUrl: 'pet-update.html'
})

export class PetUpdatePage {

	pet: any;

	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public PetService: PetService, public toastCtrl: ToastController) {
		//if(this.pet){
			this.pet = this.navParams.data;
	        PetService.findById(this.pet.id).then(
	            pet => this.pet = pet
	        );
        //}
        this.PetService = PetService;
    }

 	createPet(pet){
 		this.PetService.createNewPet(pet);
  		this.navCtrl.push(PetUserListPage);
  	}
}