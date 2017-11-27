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
	
	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public advertService: AdvertService, public toastCtrl: ToastController) {
        
    }

   

    createAdvert (advert){
        this.advertService.createNewAdvert(this.advert);
        this.navCtrl.pop();
    }
}