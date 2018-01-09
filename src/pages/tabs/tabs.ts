import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AmigosPage } from '../amigos/amigos';
import { MensagensPage } from '../mensagens/mensagens';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AmigosPage;
  tab3Root = MensagensPage;
  tab4Root = PerfilPage;

  constructor() {

  }
}
