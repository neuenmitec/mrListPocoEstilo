import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import {Quagga} from 'quagga'; // ES6
import{ FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProdEncontradoComponent } from './prod-encontrado/prod-encontrado.component';
import { ProdNoEncontradoComponent } from './prod-no-encontrado/prod-no-encontrado.component';
import {APP_ROUTING} from './app.rutes';
import { GraciasComponent } from './gracias/gracias.component';
import { LoginComponent } from './login/login.component';
import { ListasComponent } from './listas/listas.component';
import { ListasSoloComponent } from './listas-solo/listas-solo.component';
import { ListasCompartidasComponent } from './listas-compartidas/listas-compartidas.component';
import { HomeComponent } from './home/home.component';
import { DentroDeListaComponent } from './dentro-de-lista/dentro-de-lista.component';
import { FlotanteComponent } from './flotante/flotante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdEncontradoComponent,
    ProdNoEncontradoComponent,
    GraciasComponent,
    LoginComponent,
    ListasComponent,
    ListasSoloComponent,
    ListasCompartidasComponent,
    HomeComponent,
    DentroDeListaComponent,
    FlotanteComponent
    ],
  imports: [
    BrowserModule,
    MaterializeModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
