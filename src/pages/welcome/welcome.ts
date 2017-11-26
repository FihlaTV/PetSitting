import {Component, ViewChild} from '@angular/core';
import { Slides, NavController, AlertController} from 'ionic-angular';
import {AdvertListPage} from '../advert-list/advert-list';
import {ProfileUpdatePage} from '../profile-update/profile-update';
import {ProfileCreatePage} from '../profile-create/profile-create';

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html'
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    }

    ngAfterViewInit() {
        this.slides.pager = true;
    }

    openAdvertList() {
        this.navCtrl.push(AdvertListPage);
    }

    openProfileUpdatePage() {
        this.navCtrl.push(ProfileUpdatePage);

    }

    showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Connection',
      message: "Please enter your credentials to login to the platform",
      inputs: [
        {
          type:"text",
          name: 'username',
          placeholder: 'username'
        },
        {
          type:"password",
          name: 'password',
          placeholder: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: data => {
            console.log('Saved clicked');
          this.navCtrl.push(AdvertListPage);
          }
        }
      ]
    });
    prompt.present();
  }

    openProfileCreatePage(){
        this.navCtrl.push(ProfileCreatePage);
    }
}