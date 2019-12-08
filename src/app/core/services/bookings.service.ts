import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class BookingsService {

  constructor(private db: AngularFirestore) { }

  getBookings = () : Observable<any> => {
    return this.db.collection(`bookings`, ref => ref.orderBy('date')).snapshotChanges()
    .pipe(map(response => response.map(booking => this.assignKey(booking))))
  }
  getBooking = key => this.db.collection(`bookings`).doc(key).snapshotChanges()
    .pipe(map(booking => booking.payload.data()))
  
  findBookings = workerKey => this.db.collection('bookings', ref => ref.where(`worker`, "==", workerKey)).snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker))))

  deleteBooking = (key) => this.db.collection(`bookings`).doc(key).delete()

  addBooking = booking => {
    const newBooking = new Booking(booking.service, booking.worker, booking.date, booking.endDate, booking.customer.name, booking.customer.email, booking.customer.phone)
    this.db.collection(`bookings`).add({...newBooking})
  }

  assignKey(booking) {
    // console.log(service.payload.doc.id)
      return {...booking.payload.doc.data(), key: booking.payload.doc.id}
    }
}

class Booking {
  service
  worker
  date
  endDate
  customer = {
    name: '',
    email: '',
    phone: ''
  }

  constructor(service, worker, date, endDate, name, email, phone) {
    this.service = service
    this.worker = worker
    this.date = date
    this.endDate = endDate
    this.customer.name = name
    this.customer.email = email
    this.customer.phone = phone

  }
}
