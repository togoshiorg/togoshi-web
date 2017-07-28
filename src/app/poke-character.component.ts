import { Component, Input } from '@angular/core';
import { translateData } from './data/pokemon';

@Component({
  selector: 'poke-character',
  template: `
    <div class="chara">
      <div class="img">
        <img src={{url}}>
      </div>
      <div class="status">
        <h1>{{nameJa}}</h1>
        <p><span>図鑑No:</span>{{item.id}}</p>
        <p><span>CP:</span>{{item.cp}}</p>
        <p><span>時間:</span>{{item.time}}</p>
        <p><span>親:</span>{{item.user}}</p>
      </div>
    </div>
  `,
  styleUrls: ['./poke-character.component.css']
})
export default class SpriteComponent {
  @Input() item: any;
  nameEn: string;
  nameJa: string;
  url: string;
  translateData: Array<any>;
  constructor() {
    this.translateData = translateData;
  }
  ngOnInit() {
    this.nameEn = this.translateData[this.item.id - 1].en.toLowerCase();
    this.nameJa = this.translateData[this.item.id - 1].ja.toLowerCase();
    this.url = `http://www.pokestadium.com/sprites/xy/${this.item.isShiny?'shiny/':''}${this.nameEn}.gif`;
  }
}
