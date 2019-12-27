import { Component, OnInit } from '@angular/core';
import { BookingsService, ServicesService, WorkersService } from './../../core/services'
import { Observable } from 'rxjs';
import { Booking, Worker } from 'src/app/shared/models';

@Component({
  selector: 'pn-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.sass', './../admin.component.sass']
})

export class BookingsManagementComponent implements OnInit {
  bookings$ : Observable<Booking[]> = this.bookingsService.getUpcomingBookings();
  pastBookings$ : Observable<Booking[]> = this.bookingsService.getPastBookings();
  workers$ : Observable<Worker[]> = this.workersService.getWorkers();

  constructor(private bookingsService : BookingsService, private servicesService : ServicesService, private workersService : WorkersService) { }

  ngOnInit() {
      this.bookings$.subscribe();
      this.pastBookings$ = this.bookingsService.getPastBookings()
  }
}
