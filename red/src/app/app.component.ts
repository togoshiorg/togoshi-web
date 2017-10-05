import { Component } from '@angular/core';

import { PokeData } from './model/poke-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pokeLists: PokeData[] = [
    {
      cp: 9999,
      date: "99-99-99",
      human: "sasaki-hiroaki",
      image: "http://www.pokestadium.com/sprites/xy/regirock.gif",
      name: "ポケモン名",
      no: 9999
    },
    {
      cp: 9999,
      date: "99-99-99",
      human: "sasaki-hiroaki",
      image: "http://www.pokestadium.com/sprites/xy/regirock.gif",
      name: "ポケモン名",
      no: 9999
    },
    {
      cp: 9999,
      date: "99-99-99",
      human: "sasaki-hiroaki",
      image: "http://www.pokestadium.com/sprites/xy/regirock.gif",
      name: "ポケモン名",
      no: 9999
    }
  ]
}
