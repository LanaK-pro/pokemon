import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Ipokemon } from '../../shared/entities';
import { PokemonService } from '../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.css',
})
export class PokemonTeamComponent implements OnInit {
  pokemonTeam: Ipokemon[] = [];

  service = inject(PokemonService);

  ngOnInit(): void {
    this.getPokemons();
    console.log(history.state.data);
  }

  getPokemons() {
    this.service.fetchAll().subscribe((data) => {
      this.pokemonTeam = data.slice(1, 20);
    });
  }
}
