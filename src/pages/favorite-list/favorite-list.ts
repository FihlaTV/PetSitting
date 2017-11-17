import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AdvertService} from '../../providers/advert-service-rest';
import {AdvertDetailPage} from '../advert-detail/advert-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;

    constructor(public navCtrl: NavController, public service: AdvertService) {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(AdvertDetailPage, favorite.advert);
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
