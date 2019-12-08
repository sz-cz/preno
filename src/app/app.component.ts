import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // path = this.router.url
  items : Observable<any>
  constructor(db: AngularFirestore, private route : Router) {
    this.items = db.collection('items').valueChanges();
    // console.log(this.path)
    // console.log(this.items)
  }
  title = 'preno';
}
