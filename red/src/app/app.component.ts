import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { PokeData } from './model/poke-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private pokeLists: Observable<PokeData[]>;
  private size: number;

  constructor(db: AngularFireDatabase) {
    const list$ = db.list<PokeData>('getlist').valueChanges();
    this.size = null;
    this.pokeLists = list$.map(arr => arr.reverse());
  }

  pageEvent(e): void {
    console.log(e);
  }
}
