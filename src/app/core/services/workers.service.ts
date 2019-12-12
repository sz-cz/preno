import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private db: AngularFirestore) { }

  getWorkers = () : Observable<any> => this.db.collection('workers').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker))))

  getWorker = key => this.db.collection(`workers`).doc(key).snapshotChanges()
    .pipe(map(worker => ({...worker.payload.data(), key: worker.payload.id})))

  findWorkers = serviceID => this.db.collection('workers', ref => ref.where(`services.${serviceID}`, "==", true)).snapshotChanges()
      .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker)
      )))

  addWorker = value => this.db.collection(`workers`).add(value)

  deleteWorker = key => this.db.collection('workers').doc(key).delete()

  setService = (key, service) => this.db.collection('workers').doc(key).update({
    [`services.${service}`]: true
  })

  assignKey(worker) {
      return {...worker.payload.doc.data(), key: worker.payload.doc.id}
    }
}
