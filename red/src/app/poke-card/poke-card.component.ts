import { Component, Input, OnInit } from '@angular/core';

import { PokeData } from '../model/poke-data';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  @Input() pokeLists: PokeData[];

  constructor() { }

  ngOnInit() {
  }

}
