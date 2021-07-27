import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getQuery(query: string) {
    const url = `https://pokeapi.co/api/v2/${query}`;


    return this.http.get(url);
  }
  getPokemons() {
    return this.getQuery('pokemon?limit=151')
      .pipe(map((data: any) => {
        return data;
      }))
  }
  getPokeData(name: string) {
    return this.getQuery(`pokemon/${name}`);
  }
  getSearch(search: string) {

    return this.getQuery(`pokemon/${search}`)
  }
}
