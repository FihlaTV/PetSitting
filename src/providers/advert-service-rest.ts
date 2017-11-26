import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let advertsURL = SERVER_URL + 'api/adverts/';

@Injectable()
export class AdvertService {
    //favoriteCounter: number = 0;
    //favorites: Array<any> = [];

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(advertsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(advertsURL + "id/" + id)
            .map(res => res.json())
            .toPromise();
    }

    findByType(type) {
        return this.http.get(advertsURL + "type/" + type)
            .map(res => res.json())
            .toPromise();
    }

    findByUserId(userId) {
        return this.http.get(advertsURL + "userid/" + userId)
            .map(res => res.json())
            .toPromise();
    }

    createNewAdvert(advert) {
        return this.http.post(advertsURL + "create", advert);
    }

    updateAdvert(advert) {
        return this.http.post(advertsURL + "update/" + advert.id, advert);
    }

}