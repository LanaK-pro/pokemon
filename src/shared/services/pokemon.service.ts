import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipokemon } from '../entities';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  //URL de l'api
  url = environment.apiURL;

  //Ici tous les fonctions de CRUD
  constructor(private http: HttpClient) {}
  fetchAll() {
    return this.http.get<Ipokemon[]>(this.url);
  }

  fetchByType() {
    return this.http.get<Ipokemon[]>(this.url + '/types');
  }

  fetchOne(id: any) {
    return this.http.get<Ipokemon>(`${this.url}/${id}`);
  }

  fetchByName(name: string) {
    return this.http.get<Ipokemon>(`${this.url}/${name}`);
  }
}
