import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ConfirmFotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm-foto',
  templateUrl: 'confirm-foto.html',
})
export class ConfirmFotoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }
  openModal(){
    const modal= this.modalCtrl.create('ModalSucessPage');
    modal.present();
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmFotoPage');
  }

}
