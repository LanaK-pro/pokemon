import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit, inject } from '@angular/core';
import { Ipokemon } from '../../shared/entities';
import { PokemonService } from '../../shared/services/pokemon.service';
import { FormsModule, NgModel } from '@angular/forms';
import { SearchPipe } from '../../shared/search.pipe';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css',
})
export class PokedexComponent implements OnInit {
  pokemons: Ipokemon[] = [];
  service = inject(PokemonService);
  search = '';
  showPokemon = false;

  ngOnInit(): void {
    this.getPokemons();
    this.showPokemon = false;
  }

  onSearchStart() {
    this.showPokemon = true;
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data) => {
      this.pokemons = data.slice(1, 20).map((pokemon) => ({
        ...pokemon,
        isVisible: true,
      }));
    });
  }
}
