import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemon: any[] = [];
  constructor(private pokeServ: ServiceService) {
    this.pokeServ.getPokemons()
      .subscribe((data: any) => {
        console.log(data.url);
        data.results.forEach((result: any) => {
          this.pokeServ.getPokeData(result.name)
            .subscribe((res: any) => {
              this.pokemon.push(res);
              console.log(this.pokemon)
            });
        });
        // this.pokemon = data;
      })

  }

  ngOnInit(): void {
  }

}
