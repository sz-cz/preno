import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { UserInfo } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : UserInfo;
  private userRoles = {
    isWorker: false,
    isAdmin: false
  }
  private isAdmin = false
  private addAdminRole = this.fireFunctions.httpsCallable('addAdminRole')
  private addWorkerRole = this.fireFunctions.httpsCallable('addWorkerRole')

  constructor(private router : Router, private fireAuth : AngularFireAuth, private fireFunctions : AngularFireFunctions) {}

  getUser = () => this.user
  getUserRoles = () => this.userRoles

  login = (email, password) => this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(credentials => {
      this.user = credentials.user
      credentials.user.getIdTokenResult().then(result => {
        this.userRoles.isWorker = result.claims.worker
        this.userRoles.isAdmin = result.claims.admin
      })
    })

  logout = () => this.fireAuth.auth.signOut()
    .then(() => {
      this.user = undefined;
      this.userRoles = undefined;
    })
    .then(() => this.router.navigate(['']))

  register = (email, password) => this.fireAuth.auth.createUserWithEmailAndPassword(email, password)

  makeAdmin = email => this.addAdminRole({email: email}).toPromise().then(result => console.log(result))

  makeWorker = email => this.addWorkerRole({email: email})

  // delete = key => this.fireAuth.auth

}
