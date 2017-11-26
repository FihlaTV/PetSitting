import {Component} from '@angular/core';
import {AdvertService} from '../../providers/advert-service-rest';
import {AdvertListPage} from '../advert-list/advert-list';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-update',
    templateUrl: 'advert-update.html'
})
export class AdvertUpdatePage {

	advert: any;
	
	constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public advertService: AdvertService, public toastCtrl: ToastController) {
        this.advert = this.navParams.data;
        this.advertService.findById(this.advert.id).then(
            advert => this.advert = advert
        );
    }

    updateAdvert (advert){
        this.advertService.updateAdvert(advert);
        this.navCtrl.push(AdvertListPage);
    }

    createAdvert (advert){
        this.advertService.createNewAdvert(advert);
        this.navCtrl.push(AdvertListPage);
    }
}