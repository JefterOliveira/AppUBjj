import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the EsqueciDadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-dados',
  templateUrl: 'esqueci-dados.html',
})
export class EsqueciDadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }
  openModal(){
   const modal= this.modalCtrl.create('ModalPage');
   modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciDadosPage');
  }
  
  BackPage(){
    this.navCtrl.pop(LoginPage);
  }
}

