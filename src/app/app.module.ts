import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstudoComponent } from './estudo/estudo.component';
import { ConstruindoComponent } from './construindo/construindo.component';
import { ReceitaComponent } from './receita/receita.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { IdiomaFrancesComponent } from './idioma-frances/idioma-frances.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudoComponent,
    ConstruindoComponent,
    ReceitaComponent,
    IdiomaFrancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
