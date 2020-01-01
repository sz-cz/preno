import { Component, OnInit } from '@angular/core';
import { BookingsService, ServicesService, UiService, WorkersService } from './../core/services'
import { Observable } from 'rxjs';
import { Service, Worker, Booking, CustomerForm, CanComponentDeactivate } from './../shared/models';

@Component({
  selector: 'pn-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.sass']
})

export class ReservationComponent implements OnInit, CanComponentDeactivate {
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
  };

  services$ : Observable<Service[]> = this.servicesService.getAvailableServices();
  workers$ : Observable<Worker[]> = null;
  worker : Worker;
  service : Service;

  onPickedService = (service : Service) => {
    this.booking.service = service.key;
    this.service = service;
    this.booking.date = null;
    this.booking.endDate = null;
    this.booking.worker = null;
    this.workers$ = this.workersService.findWorkers(service.key)
  };

  onPickedWorker = (worker : Worker) => {
    this.booking.worker = worker.key;
    this.worker = worker;
    this.booking.date = null;
    this.booking.endDate = null
  };
  
  onPickedDate = (date : Date) => {
    this.booking.date = date;
    this.booking.endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + this.service.duration)
  }

  onCompletedForm = (form : CustomerForm) => this.booking.customer = form

  sendBooking = () => {
    this.bookingService.addBooking(this.booking)
      .then(() => this.uiService.openToast('success', 'Rezerwacja została dodana'),
            () => this.uiService.openToast('failure', 'Wystąpił błąd'))
      .then(() => {
        this.booking.service = null;
        this.booking.worker = null;
        this.booking.date = null;
        this.booking.endDate = null;
        this.booking.customer.name = '';
        this.booking.customer.email = '';
        this.booking.customer.phone = '';
      })
  };

  constructor(private servicesService : ServicesService,
    private workersService : WorkersService, 
    private bookingService : BookingsService,
    private uiService : UiService) { }

  ngOnInit() {
    this.services$.subscribe()
  }

  canDeactivate = () => 
    !this.booking.customer.email && !this.booking.customer.name && !this.booking.customer.phone ? true
    : this.uiService.openModal()
}