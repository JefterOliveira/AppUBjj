import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaramigosPage } from './buscaramigos';

@NgModule({
  declarations: [
    BuscaramigosPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaramigosPage),
  ],
})
export class BuscaramigosPageModule {}
