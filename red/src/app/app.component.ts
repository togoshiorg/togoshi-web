import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { PokeData } from './model/poke-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private size: number;
  private pokeAllLists: Observable<PokeData[]>;
  private filteredLists: Observable<PokeData[]>;

  constructor(private db: AngularFireDatabase) {
  }

  ngOnInit() {
    const list = this.db.list<PokeData>('getlist').valueChanges();
    this.size = null;
    this.filteredLists = this.pokeAllLists = list.map(arr => arr.reverse());
    this.pageEvent({pageSize: 10, pageIndex: 0});

    list.subscribe(v => {
      this.size = v.length;
    });
  }

  /**
   * ページネーションの変更を検知してフィルタリング
   * @param e: object
   */
  private pageEvent(e) {
    const start = e.pageSize * e.pageIndex;
    const end = start + e.pageSize;
    this.filteredLists = this.pokeAllLists.map(v => v.slice(start, end));
  }
}
