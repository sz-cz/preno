import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Worker } from './../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class WorkersService {
  constructor(private db: AngularFirestore) { };

  getWorkers = () : Observable<Worker[]> => this.db.collection('workers').snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker))));

  getWorker = (key : string) => this.db.collection(`workers`).doc(key).snapshotChanges()
    .pipe(map(worker => {
      const data = worker.payload.data();
      data['key'] = key
      return data
    }
      ));

  findWorkers = (serviceID : string) : Observable<Worker[]> => this.db.collection('workers', ref => ref.where(`services.${serviceID}`, "==", true)).snapshotChanges()
      .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker)
      )));

  addWorker = (worker : Worker) : Promise<any> => this.db.collection(`workers`).add(worker);

  deleteWorker = (key : string) : Promise<any> => this.db.collection('workers').doc(key).delete();

  setService = (key : string, service : string) : Promise<any> => this.db.collection('workers').doc(key).update({
    [`services.${service}`]: true
  });
  
  unsetService = (key : string, service : string) : Promise<any> => this.db.collection('workers').doc(key).update({
    [`services.${service}`]: false
  });

  assignKey = worker => ({...worker.payload.doc.data(), key: worker.payload.doc.id})
}
