import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFirestore, private authService : AuthService) { }

  createUser = (key, name, email, phone) => this.db.collection('users').doc(key).set({
    name: name,
    email: email,
    phone: phone
  })

  getUsers = () => this.db.collection('users').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(user => this.assignKey(user))))

  getUser = key => this.db.collection(`users`).doc(key).snapshotChanges()
    .pipe(map(user => user.payload.data()))

  getCurrentUser = () =>
    this.authService.getUser() ?
    this.db.collection(`users`).doc(this.authService.getUser().uid).snapshotChanges()
      .pipe(map(user => user.payload.data()))
    : empty()

  deleteUser = key => this.db.collection(`users`).doc(key).delete()

  assignKey(user) {
    return {...user.payload.doc.data(), key: user.payload.doc.id}
  }
}
