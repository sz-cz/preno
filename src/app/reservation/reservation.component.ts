import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../core/services/services.service';
import { Router } from '@angular/router';
import { WorkersService } from '../core/services/workers.service';
import { BookingsService } from '../core/services/bookings.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pn-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.sass']
})
export class ReservationComponent implements OnInit {

  booking = {
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

  services$ = this.servicesService.getServices()
  allWorkers = this.workersService.activeWorkers
  workers$ = null
  worker
  service

  onPickedService = service => {
    this.booking.service = service.key;
    this.service = service
    this.workers$ = this.workersService.findWorkers(service.key)
    // this.workers$ = this.workersService.getWorkers()
    // this.router.navigateByUrl('#workers')
  }
  onPickedWorker = worker => {
    this.booking.worker = worker.key;
    this.worker = worker;
    console.log(this.booking)
    // this.router.navigateByUrl('#workers')
  }
  onPickedDate = date => {
    this.booking.date = date
    this.booking.endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + this.service.duration)
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

  constructor(private servicesService : ServicesService,
    private workersService : WorkersService, 
    private bookingService : BookingsService, 
    private router : Router) { }

  ngOnInit() {
    this.services$.subscribe()
    this.servicesService.getService('0IyxGP51E3rSvUZfJdPP').subscribe(item => console.log(item))
    
    // this.bookingService.getBookings(0, 'upcoming').subscribe(console.log)
  }

}
