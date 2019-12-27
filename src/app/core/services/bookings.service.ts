import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Booking as BookingModel } from './../../shared/models';

@Injectable({
  providedIn: 'root'
})

export class BookingsService {
  today : Date = new Date();

  constructor(
    private db: AngularFirestore) { };

  getBookings = () : Observable<BookingModel[]> => this.db.collection(`bookings`, ref => ref.orderBy('date')).snapshotChanges()
    .pipe(map(response => response.map(booking => this.assignKey(booking))));

  getUpcomingBookings = () : Observable<BookingModel[]> => this.db.collection(`bookings`, ref => ref.where(`date`, ">", this.today).orderBy('date')).snapshotChanges()
    .pipe(map(response => response.map(booking => this.assignKey(booking))));

  getPastBookings = () : Observable<BookingModel[]> => this.db.collection(`bookings`, ref => ref.where(`date`, "<=", this.today).orderBy('date', 'desc')).snapshotChanges()
    .pipe(map(response => response.map(booking => this.assignKey(booking))));

  getBooking = (key : string) : Observable<any> => this.db.collection(`bookings`).doc(key).snapshotChanges()
    .pipe(map(booking => booking.payload.data()));
  
  findBookings = (workerKey : string) : Observable<BookingModel[]> => this.db.collection('bookings', ref => ref
    .where(`worker`, "==", workerKey)
    .where('date', '>', this.today)
    .orderBy('date')).snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(worker => this.assignKey(worker))));

  getUserBookings = (email : string) : Observable<BookingModel[]> => this.db.collection('bookings', ref => ref.where(`customer.email`, "==", email)).snapshotChanges()
    .pipe(map((snapshot : any) => snapshot.map(booking => this.assignKey(booking))));

  deleteBooking = (key : string) : Promise<any> => this.db.collection(`bookings`).doc(key).delete();

  addBooking = (booking : BookingModel) : Promise<any> => {
    const newBooking = new Booking(booking.service, booking.worker, booking.date, booking.endDate, booking.customer.name, booking.customer.email, booking.customer.phone);
    return this.db.collection(`bookings`).add({...newBooking})
  };

  assignKey = (booking) : BookingModel => ({...booking.payload.doc.data(), key: booking.payload.doc.id})
}

class Booking implements BookingModel {
  service;
  worker;
  date;
  endDate;
  customer = {
    name: '',
    email: '',
    phone: ''
  };

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
