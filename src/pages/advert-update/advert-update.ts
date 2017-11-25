import {Component} from '@angular/core';
import {AdvertService} from '../../providers/advert-service-rest';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-update',
    templateUrl: 'advert-update.html'
})
export class AdvertUpdatePage {

	advert: any;
	
	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public AdvertService: AdvertService, public toastCtrl: ToastController) {
        this.advert = this.navParams.data;
        AdvertService.findById(this.advert.id).then(
            advert => this.advert = advert
        );
    }
    
}