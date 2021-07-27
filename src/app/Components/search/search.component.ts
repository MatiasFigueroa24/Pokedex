import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  ListPokemon: any[] = [];
  buscar: string = "";

  constructor(private pokeServ: ServiceService) { }

  ngOnInit(): void {
  }
  buscarpoke(search: string) {
    console.log(search)
    this.pokeServ.getSearch(search)
      .subscribe((data: any) => {
        console.log(data)
        this.ListPokemon = data;
      })
  }

}