import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReceitaComponent } from './receita/receita.component';
import { ConstruindoComponent } from './construindo/construindo.component';
import { EstudoComponent } from './estudo/estudo.component';
import { IdiomaFrancesComponent } from './idioma-frances/idioma-frances.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'receita',component: ReceitaComponent},
  {path: 'construindo',component: ConstruindoComponent},
  {path: 'estudo',component: EstudoComponent},
  {path: 'frances',component: IdiomaFrancesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

