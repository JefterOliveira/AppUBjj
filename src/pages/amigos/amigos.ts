import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PerfilAmigosPage } from '../perfil-amigos/perfil-amigos';
import { PerfilAmigos_2Page } from '../perfil-amigos-2/perfil-amigos-2';

/**
 * Generated class for the AmigosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amigos',
  templateUrl: 'amigos.html',
})
export class AmigosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmigosPage');
  }
  openModal(){
    const modal= this.modalCtrl.create('ModalAddPage');
    modal.present();
  }
  EnterPageAmigo1(){
    this.navCtrl.push(PerfilAmigosPage);
  }
  EnterPageAmigo2(){
    this.navCtrl.push(PerfilAmigos_2Page);
  }

}
