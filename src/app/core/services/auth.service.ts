import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireFunctions } from '@angular/fire/functions';
import { UserInfo } from 'firebase';
import { UserRoles } from './../../shared/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user : UserInfo;
  private userRoles : UserRoles = {
    isWorker: false,
    isAdmin: false,
    workerKey: ''
  };

  private addAdminRole = this.fireFunctions.httpsCallable('addAdminRole');
  private addWorkerRole = this.fireFunctions.httpsCallable('addWorkerRole')
  private deleteUser = this.fireFunctions.httpsCallable('deleteUser')

  constructor(
    private fireAuth : AngularFireAuth, 
    private fireFunctions : AngularFireFunctions) {};

  getUser = () => this.user;
  getUserRoles = () => this.userRoles;

  login = (email, password) => this.fireAuth.auth.signInWithEmailAndPassword(email, password)
    .then(credentials => {
      this.user = credentials.user
      return credentials.user.getIdTokenResult().then(result => {
        result.claims.worker == true ? this.userRoles.isWorker = result.claims.worker : this.userRoles.isWorker = false;
        result.claims.admin == true ? this.userRoles.isAdmin = result.claims.admin : this.userRoles.isAdmin = false;
        // result.claims.workerID ? this.userRoles.workerKey = result.claims.workerID : this.userRoles.workerKey = '';
        this.userRoles.workerKey = result.claims.workerID;
        return result.claims
      })
    })

  logout = () => this.fireAuth.auth.signOut()
    .then(() => {
      this.user = undefined;
      this.userRoles.isAdmin = undefined;
      this.userRoles.isWorker = undefined;
    })

  register = (email, password) => this.fireAuth.auth.createUserWithEmailAndPassword(email, password)

  makeAdmin = email => this.addAdminRole({email: email}).toPromise().then(result => console.log(result))

  makeWorker = (email, workerID) => this.addWorkerRole({email: email, workerID: workerID}).toPromise().then(result => console.log(result))

  delete = (email) => this.deleteUser({email: email}).toPromise().then(result => console.log(result))

}
