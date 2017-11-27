import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {AdvertService} from '../../providers/advert-service-rest';
import {PetService} from '../../providers/pet-service-rest';
import {AdvertDetailPage} from '../advert-detail/advert-detail';
import {AdvertUpdatePage} from '../advert-update/advert-update';
import {AdvertCreatePage} from '../advert-create/advert-create';
import leaflet from 'leaflet';

@Component({
    selector: 'page-advert-list',
    templateUrl: 'advert-list.html'
})
export class AdvertListPage {

    public event = {
    month: '1990-02-19',
    timeStarts: '19:45',
    timeEnds: '23:30'}

    adverts: Array<any>;
    advertsForSearch: Array<any>;
    pet: any;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: AdvertService, public petService: PetService, public config: Config) {
        this.findAll();
    }

    openAdvertDetail(advert: any) {
        this.navCtrl.push(AdvertDetailPage, advert);
    }

    openAdvertCreate() {
        this.navCtrl.push(AdvertCreatePage);
    }

    getPetImage(petId) {
        
        //this.petService.findById(petId)
        this.petService.findById("5a11fbc6e7ad1801f04efc30")
            .then(pet => this.pet = pet)
            .catch(error => alert(error));

        return this.pet.image;
        //return "https://i.skyrock.net/6788/18136788/pics/518207324.jpg";
    }

    onInput(event) {
         // Reset items back to all of the items
        this.adverts = this.advertsForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.adverts = this.adverts.filter((advert) => {
            return (advert.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.adverts = data;
                this.advertsForSearch = data;
            })
            .catch(error => alert(error));
    }

    advertMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.advertMarkers();
        })
    }

    advertMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.adverts.forEach(advert => {
            if (advert.lat, advert.lng) {
                let marker: any = leaflet.marker([advert.lat, advert.lng]).on('click', event => this.openAdvertDetail(event.target.data));
                marker.data = advert;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }

}
