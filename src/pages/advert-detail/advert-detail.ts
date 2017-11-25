import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {AdvertService} from '../../providers/advert-service-rest';
import {UserService} from '../../providers/user-service-rest';
import {PetService} from '../../providers/pet-service-rest';
import {ProfileDetailPage} from '../profile-detail/profile-detail';
import {PetDetailPage} from '../pet-detail/pet-detail';
import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-detail',
    templateUrl: 'advert-detail.html'
})
export class AdvertDetailPage {

    advert: any;
    user: any;
    pet: any;

    constructor(
        public actionSheetCtrl: ActionSheetController, 
        public navCtrl: NavController, 
        public navParams: NavParams, 
        public advertService: AdvertService, 
        public userService: UserService, 
        public petService: PetService, 
        public toastCtrl: ToastController) {

        this.advert = this.navParams.data;
        advertService.findById(this.advert.id).then(
            advert => this.advert = advert
        );

        userService.findById(this.advert.userId).then(
            user => this.user = user
        );

        petService.findById(this.advert.petId).then(
            pet => this.pet = pet
        );
    }

    openUserDetail(){
        this.navCtrl.push(ProfileDetailPage, this.user);
    }

    openPetDetail(petId){
        this.navCtrl.push(PetDetailPage, this.pet);
    }

    /*favorite(advert) {
        this.advertService.favorite(advert)
            .then(advert => {
                let toast = this.toastCtrl.create({
                    message: 'Advert added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

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
    */

}
