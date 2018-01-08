import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmFotoPage } from '../confirm-foto/confirm-foto';

/**
 * Generated class for the FotoPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foto-perfil',
  templateUrl: 'foto-perfil.html',
})
export class FotoPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  EnterPageConfirm(){
    this.navCtrl.push(ConfirmFotoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoPerfilPage');
  }

}
