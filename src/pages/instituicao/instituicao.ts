import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
import { BuscaramigosPage } from '../buscaramigos/buscaramigos';

/**
 * Generated class for the InstituicaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-instituicao',
  templateUrl: 'instituicao.html',
})
export class InstituicaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  EnterPageBusca() {
    this.navCtrl.push(BuscaramigosPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstituicaoPage');
  }

}
