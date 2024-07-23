import { Component, OnInit, inject } from '@angular/core';
import { Ipokemon } from '../../shared/entities';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent implements OnInit {
  pokemons: Ipokemon[] = [];

  service = inject(PokemonService);

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data) => {
      this.pokemons = data.slice(0, 3);
    });
  }
}
