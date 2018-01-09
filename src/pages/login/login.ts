import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddUserPage } from '../add-user/add-user';
import { EsqueciDadosPage } from '../esqueci-dados/esqueci-dados';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  EnterAddUser(){
    this.navCtrl.push(AddUserPage);
  }
  EnterPageTabs(){
    this.navCtrl.push(TabsPage);
  }
  EnterEsqueciDados(){
    this.navCtrl.push(EsqueciDadosPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
