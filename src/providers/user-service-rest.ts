import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let usersURL = SERVER_URL + 'api/users/';

@Injectable()
export class UserService {
  
    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(usersURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(usersURL + "id/" + id)
            .map(res => res.json())
            .toPromise();
    }

    updateInfo(user) {
        return this.http.post(usersURL + "update/" + "5a1c8a4e4bef81001481f512", user).toPromise();
    }
}