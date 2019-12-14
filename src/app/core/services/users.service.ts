import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFirestore) { }

  createUser = (key, name, email, phone) => this.db.collection('users').doc(key).set({
    name: name,
    email: email,
    phone: phone
  })

  getUsers = () => this.db.collection('users').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(user => this.assignKey(user))))

  getUser = key => this.db.collection(`users`).doc(key).snapshotChanges()
  .pipe(map(user => user.payload.data()))

  deleteUser = key => this.db.collection(`users`).doc(key).delete()

  assignKey(user) {
    return {...user.payload.doc.data(), key: user.payload.doc.id}
  }
}
