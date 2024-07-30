import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ipokemon } from '../../shared/entities';
import { PokemonService } from '../../shared/services/pokemon.service';
import { Subscription, switchMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-team.component.html',
  styleUrl: './pokemon-team.component.css',
})
export class PokemonTeamComponent implements OnInit, OnDestroy {
  pokemons: Ipokemon[] = [];

  @Input() selectedPokemon: Ipokemon | null = null;

  //Initialise un compteur
  count: number = 0;
  //Erreur node js donc j'ai mis any
  idInterval: any;

  dataPokemon!: Subscription;

  // @Input() selectedPokemon: string;
  service = inject(PokemonService);

  //Compte
  ngOnInit(): void {
    // console.log('selectedPokemon in child:', this.selectedPokemon);

    this.getPokemons();
    console.log(history.state.data);
    this.idInterval = setInterval(() => this.count++, 1000);
  }

  getPokemons() {
    this.dataPokemon = this.service.fetchAll().subscribe((data) => {
      this.pokemons = data.slice(1, 20);
    });
  }

  /* ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedPokemon'] && !changes['selectedPokemon'].firstChange) {
      console.log('selectedPokemon changed:', this.selectedPokemon);
      // Handle changes in selectedPokemon
    }
  } */
  //Le détruit quand plus utilisé
  ngOnDestroy(): void {
    this.dataPokemon.unsubscribe;
    clearInterval(this.idInterval);
  }
}
