import { Component, OnInit, inject } from '@angular/core';
import { PokemonService } from '../../shared/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Ipokemon } from '../../shared/entities';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
})
export class PokemonPageComponent implements OnInit {
  service = inject(PokemonService);
  route = inject(ActivatedRoute);
  pokemon: Ipokemon | undefined;

  ngOnInit(): void {
    this.fetchOnePokemon();
  }

  fetchOnePokemon() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.fetchOne(id).subscribe((data) => (this.pokemon = data));
  }

  showInfos(content: any): boolean {
    if (content === null) {
      return false;
    } else {
      return true;
    }
  }
}
