import { Component, Input } from '@angular/core';
import { translateData } from './data/pokemon';

@Component({
  selector: 'sprite',
  template: `
    <img src="http://www.pokestadium.com/sprites/xy/{{name}}.gif">
  `
})
export default class SpriteComponent {
  @Input() id: number;
  name: string;
  translateData: Array<any>;
  constructor() {
    this.translateData = translateData;
  }
  ngOnInit() {
    const number = this.id - 1;
    this.name = this.translateData[number].en.toLowerCase();
  }
}
