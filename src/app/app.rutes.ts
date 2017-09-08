import { RouterModule, Routes } from '@angular/router';
import {ProdEncontradoComponent} from './prod-encontrado/prod-encontrado.component';
import {ProdNoEncontradoComponent} from './prod-no-encontrado/prod-no-encontrado.component';
import{LoginComponent} from "./login/login.component";
import {ListasComponent} from "./listas/listas.component";
import {ListasSoloComponent} from "./listas-solo/listas-solo.component";
import {ListasCompartidasComponent} from "./listas-compartidas/listas-compartidas.component";
import {HomeComponent} from "./home/home.component";
import {DentroDeListaComponent} from './dentro-de-lista/dentro-de-lista.component';

const APP_ROUTES: Routes = [
  {path: 'encontrado', component: ProdEncontradoComponent },
  {path: 'noencontrado', component: ProdNoEncontradoComponent },
  {path: 'login', component: LoginComponent},
  {path: 'listas', component: ListasComponent},
  {path: 'listasmias', component: ListasSoloComponent},
  {path: 'listascompartidas', component:ListasCompartidasComponent},
  {path: 'home', component:HomeComponent},
  {path: 'lista/detalle', component:DentroDeListaComponent},

  {path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
