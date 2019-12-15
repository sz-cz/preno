import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserInfo } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : UserInfo;

  constructor(private router : Router, private fireAuth : AngularFireAuth) {}

  getUser = () => this.user

  login = (email, password) => this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(credentials => this.user = credentials.user)

  logout = () => this.fireAuth.auth.signOut()
    .then(() => this.user = undefined).then(() => this.router.navigate(['']))

  register = (email, password) => this.fireAuth.auth.createUserWithEmailAndPassword(email, password)

  // delete = key => this.fireAuth.auth

}
