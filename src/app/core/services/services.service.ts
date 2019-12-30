import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Service } from './../../shared/models';


@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private db: AngularFirestore) { }

  getServices = () : Observable<Service[]> => this.db.collection('services').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(service => this.assignKey(service))));

  getServicesKeys = () : Observable<string[]> => this.db.collection('services').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(service => service.payload.doc.id)));

  getService = (key : string) : Observable<any> => this.db.collection(`services`).doc(key).snapshotChanges()
    .pipe(map(service => service.payload.data()));

  addService = (service : Service) : Promise<any> => this.db.collection(`services`).add(service);

  updateService = (key, service : Service) : Promise<any> => {
    // const { key, ...data } = service;
    return this.db.collection('services').doc(key).update(service)
  }

  deleteService = (key : string) : Promise<any> => this.db.collection('services').doc(key).delete();

  assignKey = (service) : Service => ({...service.payload.doc.data(), key: service.payload.doc.id})
}
