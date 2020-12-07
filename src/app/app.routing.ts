import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { DiretoresComponent } from './diretores/diretores.component';
import { FilmesComponent } from './filmes/filmes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'diretores', component: DiretoresComponent },
    { path: 'filmes', component: FilmesComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
  ]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }