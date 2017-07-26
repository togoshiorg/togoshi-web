import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  getlist: FirebaseListObservable<any[]>;
  length: number;
  constructor(db: AngularFireDatabase) {
    this.title = 'togoshi-web';
    this.getlist = db.list('/getlist');
    this.getlist.subscribe(snapshot => {
        this.length = snapshot.length;
      });
  }
}