import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AmigosPage } from '../amigos/amigos';
import { MensagensPage } from '../mensagens/mensagens';
import { PerfilPage } from '../perfil/perfil';
import { InstituicaoPage } from '../instituicao/instituicao';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AmigosPage;
  tab3Root = InstituicaoPage;
  tab4Root = MensagensPage;
  tab5Root = PerfilPage;

  constructor() {

  }
}
