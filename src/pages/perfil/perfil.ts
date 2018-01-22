import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PerfilAmigosPage } from '../perfil-amigos/perfil-amigos';
import { PerfilAmigos_2Page } from '../perfil-amigos-2/perfil-amigos-2';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  
  EnterPageAmigo1(){
    this.navCtrl.push(PerfilAmigosPage);
  }
  EnterPageAmigo2(){
    this.navCtrl.push(PerfilAmigos_2Page);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

}
