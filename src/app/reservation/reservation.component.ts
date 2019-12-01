import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../core/services/services.service';
import { Router } from '@angular/router';
import { WorkersService } from '../core/services/workers.service';
import { BookingsService } from '../core/services/bookings.service';

@Component({
  selector: 'pn-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.sass']
})
export class ReservationComponent implements OnInit {

  booking = {
    id: 1,
    service: null,
    worker: null,
    date: null,
    endDate: null,
    customer: {
      name: '',
      email: '',
      phone: ''
    }
  }

  services = this.servicesService.activeServices
  allWorkers = this.workersService.activeWorkers
  workers = null

  onPickedService = serviceID => {
    this.booking.service = serviceID;
    this.workers = this.workersService.findWorkers(serviceID)
    // this.router.navigateByUrl('#workers')
  }
  onPickedWorker = workerID => {
    this.booking.worker = workerID;
    console.log(this.booking)
    // this.router.navigateByUrl('#workers')
  }
  onPickedDate = date => {
    this.booking.date = date
    this.booking.endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + this.services[this.booking.service].duration)
    console.log(this.booking)
  }
  onCompletedForm = form => {
    this.booking.customer = form
    console.log(this.booking)
  }
  sendBooking = () => {
    console.log('Wysyłam rezerwację');
    this.bookingService.addBooking(this.booking);
    this.booking.service = null;
    this.booking.worker = null;
    this.booking.date = null;
    this.booking.endDate = null;
    this.booking.customer.name = '';
    this.booking.customer.email = '';
    this.booking.customer.phone = '';
  }

  constructor(private servicesService : ServicesService, private workersService : WorkersService, private bookingService : BookingsService, private router : Router) { }

  ngOnInit() {
    this.bookingService.getBookings(0, 'upcoming').subscribe(console.log)
  }

}
