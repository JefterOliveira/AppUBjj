import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { AddUserPage } from '../pages/add-user/add-user';
import { EsqueciDadosPage } from '../pages/esqueci-dados/esqueci-dados';
import { FotoPerfilPage } from '../pages/foto-perfil/foto-perfil';
import { ConfirmFotoPage } from '../pages/confirm-foto/confirm-foto';
import { AmigosPage } from '../pages/amigos/amigos';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { PerfilPage } from '../pages/perfil/perfil';
import { InstituicaoPage } from '../pages/instituicao/instituicao';
import { BuscaramigosPage } from '../pages/buscaramigos/buscaramigos';
import { PerfilAmigosPage } from '../pages/perfil-amigos/perfil-amigos';
import { PerfilAmigos_2Page } from '../pages/perfil-amigos-2/perfil-amigos-2';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage,
    AddUserPage,
    EsqueciDadosPage,
    FotoPerfilPage,
    ConfirmFotoPage,
    AmigosPage,
    MensagensPage,
    PerfilPage,
    InstituicaoPage,
    BuscaramigosPage,
    PerfilAmigosPage,
    PerfilAmigos_2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    IntroPage,
    LoginPage,
    AddUserPage,
    EsqueciDadosPage,
    FotoPerfilPage,
    ConfirmFotoPage,
    AmigosPage,
    MensagensPage,
    PerfilPage,
    InstituicaoPage,
    BuscaramigosPage,
    PerfilAmigosPage,
    PerfilAmigos_2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
