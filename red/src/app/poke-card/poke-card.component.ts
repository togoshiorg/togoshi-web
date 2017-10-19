import { Component, Input, OnInit } from '@angular/core';

import { PokeData } from '../model/poke-data';
import { translateData } from '../data/pokemon';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  translateData = translateData;

  @Input() lists: PokeData[];

  constructor() { }

  ngOnInit() {
  }

}
