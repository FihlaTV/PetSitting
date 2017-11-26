import { Component } from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {PetService} from '../../providers/pet-service-rest';
import leaflet from 'leaflet';

@Component({
    selector: 'page-pet-detail',
    templateUrl: 'pet-detail.html'
})
export class PetDetailPage {

pet: any;

  
    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public PetService: PetService, public toastCtrl: ToastController) {
        this.pet = this.navParams.data;
        PetService.findById(this.pet.id).then(
            pet => this.pet = pet
        );
        }
}
