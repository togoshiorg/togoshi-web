import { Component, Input } from '@angular/core';
import { translateData } from './data/pokemon';

@Component({
  selector: 'poke-character',
  template: `<img src={{url}}>`
})
export default class SpriteComponent {
  @Input() id: number;
  @Input() isShiny: boolean;
  name: string;
  url: string;
  translateData: Array<any>;
  constructor() {
    this.translateData = translateData;
  }
  ngOnInit() {
    const number = this.id - 1;
    this.name = this.translateData[number].en.toLowerCase();
    this.url = `http://www.pokestadium.com/sprites/xy/${this.isShiny?'shiny/':''}${this.name}.gif`;
  }
}
