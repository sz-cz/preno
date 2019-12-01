import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class BookingsService {

  constructor(private db: AngularFirestore) { }

  getBookings = (workerIndex, type) : Observable<any> => {
    return this.db.collection(`/bookings/${workerIndex}/${type}`).snapshotChanges()
    .pipe(map(response => response.map(booking => booking.payload.doc.data())))
  }

  addBooking = booking => {
    const newBooking = new Booking(booking.id, booking.service, booking.worker, booking.date, booking.endDate, booking.customer.name, booking.customer.email, booking.customer.phone)
    this.db.collection(`/bookings/${booking.worker}/upcoming`).add({...newBooking})
  }
}

class Booking {
  id
  service
  worker
  date
  endDate
  customer = {
    name: '',
    email: '',
    phone: ''
  }

  constructor(id, service, worker, date, endDate, name, email, phone) {
    this.id = id;
    this.service = service
    this.worker = worker
    this.date = date
    this.endDate = endDate
    // console.log(this)
    this.customer.name = name
    this.customer.email = email
    this.customer.phone = phone

  }
}
