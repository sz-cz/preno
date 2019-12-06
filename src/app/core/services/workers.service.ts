import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {

  constructor(private db: AngularFirestore) { }

  activeWorkers = []

  getWorkers = () : Observable<any> => this.db.collection('workers').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker))))

  getWorker = key => this.db.collection(`workers`).doc(key).snapshotChanges()
    .pipe(map(worker => ({...worker.payload.data(), key: worker.payload.id})))

  findWorkers = serviceID => this.db.collection('workers', ref => ref.where(`services.${serviceID}`, "==", true)).snapshotChanges()
      .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker)
      )))

  assignKey(worker) {
      return {...worker.payload.doc.data(), key: worker.payload.doc.id}
    }
}
