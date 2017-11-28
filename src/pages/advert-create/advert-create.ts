import {Component} from '@angular/core';

import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';


import {AdvertService} from '../../providers/advert-service-rest';
import {AdvertListPage} from '../advert-list/advert-list';
import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-create',
    templateUrl: 'advert-create.html'
})
export class AdvertCreatePage {

	
	
	advert: any;

	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public AdvertService: AdvertService, public toastCtrl: ToastController) {
		
		this.advert = this.navParams.data;
        this.AdvertService = AdvertService;
    }

   

    createAdvert (advert){
        console.log(advert);
        this.AdvertService.createNewAdvert(advert);
        this.navCtrl.pop();    
    }
}