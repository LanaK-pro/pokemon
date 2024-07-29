import { Pipe, PipeTransform } from '@angular/core';
import { Ipokemon } from './entities';
import { PokemonService } from './services/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(values: Ipokemon[], terms: string): Ipokemon[] {
    if (!terms) {
      return values;
    }

    const lowerCaseTerms = terms.toLowerCase();
    return values.filter((pokemon) =>
      pokemon.name.fr.toLowerCase().includes(lowerCaseTerms),
    );
  }
}
