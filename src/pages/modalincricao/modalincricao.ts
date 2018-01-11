import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
* Generated class for the ModalincricaoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()
@Component({
  selector: 'page-modalincricao',
  templateUrl: 'modalincricao.html',
})
export class ModalincricaoPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
  }

  closeModal(){
    this.view.dismiss();    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalincricaoPage');
  }
  
}
