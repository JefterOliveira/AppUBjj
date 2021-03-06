import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FotoPerfilPage } from '../foto-perfil/foto-perfil';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  BackPage(){
    this.navCtrl.pop(LoginPage);
  }
  EnterPageFoto(){
    this.navCtrl.push(FotoPerfilPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

}
