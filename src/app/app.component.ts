import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  db: AngularFireDatabase;
  getlist: FirebaseListObservable<any[]>;
  length: number;
  constructor(db: AngularFireDatabase) {
    this.title = 'togoshi-web';
    this.db = db;
    this.getlist = this.db.list('/getlist', {
      query: {
        orderByChild: 'time'
      }
    }).map((array) => array.reverse()) as FirebaseListObservable<any[]>;
    this.getlist.subscribe(snapshot => {
        this.length = snapshot.length;
      });
  }
}