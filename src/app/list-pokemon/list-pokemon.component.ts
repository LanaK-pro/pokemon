import { Component, OnInit, inject } from '@angular/core';
import { Ipokemon } from '../../shared/entities';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PokemonTeamComponent } from '../pokemon-team/pokemon-team.component';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent implements OnInit {
  pokemons: Ipokemon[] = [];
  visiblePokemonId: number | null = null;

  //Pokemon selectionée
  selectedPokemon: string = '';

  service = inject(PokemonService);
  openModalId: number | null = null;

  //Transfere d'un pokemon d'une page a l'autre

  constructor(private router: Router) {}

  sendToTeam() {
    this.router.navigate([PokemonTeamComponent], {
      state: {
        description: 'You are in needed in b',
        Label: 'B',
      },
    });
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  /* getPokemons() {
    this.service.fetchAll().subscribe((data) => {
      this.pokemons = data.slice(1, 20);
    });
  } */

  getPokemons() {
    this.service.fetchAll().subscribe((data) => {
      this.pokemons = data.slice(1, 20).map((pokemon) => ({
        ...pokemon,
        isVisible: true,
      }));
    });
  }

  openModal(id: number) {
    this.openModalId = id;
  }

  closeModal() {
    this.openModalId = null;
  }

  toggleVisibility(pokemonId: number) {
    if (this.visiblePokemonId === pokemonId) {
      this.visiblePokemonId = null; // Cacher si déjà visible
    } else {
      this.visiblePokemonId = pokemonId; // Montrer ce Pokémon
    }
  }
}
