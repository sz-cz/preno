import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../core/services/services.service';
import { Router } from '@angular/router';
import { WorkersService } from '../core/services/workers.service';
import { BookingsService } from '../core/services/bookings.service';
import { Observable } from 'rxjs';
import { Booking, CustomerForm } from '../shared/models/booking.model';
import { Service } from '../shared/models/service.model';
import { Worker } from '../shared/models/worker.model';

@Component({
  selector: 'pn-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.sass']
})
export class ReservationComponent implements OnInit {

  booking : Booking = {
    key: '',
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

  services$ : Observable<Service> = this.servicesService.getServices()
  workers$ : Observable<Worker> = null
  worker : Worker
  service : Service

  onPickedService = (service : Service) => {
    this.booking.service = service.key;
    this.service = service;
    this.booking.date = null
    this.booking.endDate = null
    this.booking.worker = null
    this.workers$ = this.workersService.findWorkers(service.key);
  }

  onPickedWorker = (worker : Worker) => {
    this.booking.worker = worker.key;
    this.worker = worker;
    this.booking.date = null
    this.booking.endDate = null
  }
  
  onPickedDate = (date : Date) => {
    this.booking.date = date
    this.booking.endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + this.service.duration)
    console.log(this.booking)
  }

  onCompletedForm = (form : CustomerForm) => {
    this.booking.customer = form
  }

  sendBooking = () => {
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
  }

}
