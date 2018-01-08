import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FotoPerfilPage } from './foto-perfil';
import { ConfirmFotoPage } from '../confirm-foto/confirm-foto';

@NgModule({
  declarations: [
    FotoPerfilPage,
    ConfirmFotoPage
  ],
  imports: [
    IonicPageModule.forChild(FotoPerfilPage),
  ],
})
export class FotoPerfilPageModule {}
