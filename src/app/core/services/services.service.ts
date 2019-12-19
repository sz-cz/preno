import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private db: AngularFirestore) { }

  getServices = () : Observable<any> => this.db.collection('services').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(service => this.assignKey(service))))

  getServicesKeys = () : Observable<any> => this.db.collection('services').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(service => service.payload.doc.id)))

  getService = key => this.db.collection(`services`).doc(key).snapshotChanges()
    .pipe(map(service => service.payload.data()))

  addService = value => this.db.collection(`services`).add(value)

  deleteService = key => this.db.collection('services').doc(key).delete()

    assignKey(service) {
        return {...service.payload.doc.data(), key: service.payload.doc.id}
      }

}
