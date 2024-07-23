import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Ipokemon } from '../../shared/entities';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  pokemons: Ipokemon[] = [];
  poisonPokemons: Ipokemon[] = [];

  service = inject(PokemonService);

  ngOnInit(): void {
    this.getPokemons();
    this.getPokemonsByType('poison');
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data) => {
      this.pokemons = data.slice(1, 4);
    });
  }

  getPokemonsByType(type: string) {
    this.service.fetchAll().subscribe((data) => {
      this.poisonPokemons = data
        .filter((pokemon) =>
          pokemon.types.some((type) => type.name === 'poison'),
        )
        .slice(0, 3);
    });
  }
}
