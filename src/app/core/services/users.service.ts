import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from './../../shared/models';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private db: AngularFirestore, private authService : AuthService) { };

  createUser = (key, name, email, phone) : Promise<any> => this.db.collection('users').doc(key).set({
    name: name,
    email: email,
    phone: phone
  });

  getUsers = () : Observable<User[]> => this.db.collection('users').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map((user : User) => this.assignKey(user))));

  getUser = (key : string) : Observable<any> => this.db.collection(`users`).doc(key).snapshotChanges()
    .pipe(map(user => user.payload.data()));

  getCurrentUser = () : Observable<any> =>
    this.authService.getUser() ?
    this.db.collection(`users`).doc(this.authService.getUser().uid).snapshotChanges()
      .pipe(map(user => user.payload.data()))
    : empty();

  deleteUser = (key : string) : Promise<any> => this.db.collection(`users`).doc(key).delete();

  assignKey = (user) : User => ({...user.payload.doc.data(), key: user.payload.doc.id})
}
