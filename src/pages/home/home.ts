import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, private modalCtrl:ModalController) {
    
  }
  openModalInscricao(){
    const modal= this.modalCtrl.create('ModalincricaoPage');
    modal.present();
  }
  
  openModal(){
    const modal= this.modalCtrl.create('ModalfiltroPage');
    modal.present();
  }
  
  
}
