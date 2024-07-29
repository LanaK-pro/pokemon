import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { Error404Component } from './error404/error404.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonTeamComponent } from './pokemon-team/pokemon-team.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pokemon-list', component: ListPokemonComponent },
  { path: 'pokemon-details', component: PokemonDetailsComponent },
  { path: 'pokemon-list/:id', component: PokemonPageComponent },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon-team', component: PokemonTeamComponent },
  { path: '**', component: Error404Component },
];
