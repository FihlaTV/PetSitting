import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let petsURL = SERVER_URL + 'api/pets/';

@Injectable()
export class PetService {
  

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(petsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(petsURL + "id/" + id)
            .map(res => res.json())
            .toPromise();
    }

    findByOwnerId(id) {
        return this.http.get(petsURL + "ownerid/" + id)
            .map(res => res.json())
            .toPromise();
    }

    findByBreed(breed) {
        return this.http.get(petsURL + "breed/" + breed)
            .map(res => res.json())
            .toPromise();
    }

    createNewPet(pet){
        return this.http.post(petsURL + "create/", pet).toPromise();
    }


    updatePet(pet) {
        return this.http.post(petsURL + "update/" + pet.id, pet).toPromise();
    }

    delete(pet) {
        return this.http.post(petsURL + "delete/" + pet.id, pet).toPromise();
    }
}

