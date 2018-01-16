import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InstituicaoPage } from './instituicao';
import { BuscaramigosPage } from '../buscaramigos/buscaramigos';

@NgModule({
  declarations: [
    InstituicaoPage,
    BuscaramigosPage
  ],
  imports: [
    IonicPageModule.forChild(InstituicaoPage),
  ],
})
export class InstituicaoPageModule {}
