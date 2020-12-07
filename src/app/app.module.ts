import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FilmesComponent } from './filmes/filmes.component';
import { DiretoresComponent } from './diretores/diretores.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AddDiretorComponent } from './diretores/add-diretor/add-diretor.component';
import { FormsModule } from '@angular/forms';
import { EditDiretorComponent } from './diretores/edit-diretor/edit-diretor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FilmesComponent,
    DiretoresComponent,
    AddDiretorComponent,
    EditDiretorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
