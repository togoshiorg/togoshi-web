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

  pokeLists: Observable<PokeData[]>;

  constructor(db: AngularFireDatabase) {
    this.pokeLists = db.list('getlist').valueChanges();
  }
}
