import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {AdvertService} from '../../providers/advert-service-rest';
import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-detail',
    templateUrl: 'advert-detail.html'
})
export class AdvertDetailPage {

    advert: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public AdvertService: AdvertService, public toastCtrl: ToastController) {
        this.advert = this.navParams.data;
        AdvertService.findById(this.advert.id).then(
            advert => this.advert = advert
        );
    }

    /*favorite(advert) {
        this.AdvertService.favorite(advert)
            .then(advert => {
                let toast = this.toastCtrl.create({
                    message: 'Advert added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }*/

    share(advert) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
