import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let usersURL = SERVER_URL + 'api/pets/';

@Injectable()
export class PetService {

}