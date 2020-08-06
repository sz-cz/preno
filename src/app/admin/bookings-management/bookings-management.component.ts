import { Component, OnInit } from '@angular/core';
import { BookingsService, WorkersService, AuthService, ServicesService } from './../../core/services'
import { Observable } from 'rxjs';
import { Booking, Worker, UserRoles, Service } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/operators';

@Component({
  selector: 'pn-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.sass', './../admin.component.sass']
})

export class BookingsManagementComponent implements OnInit {
  private userRoles : UserRoles
  bookings$ : Observable<Booking[]>
  searchedBookings$ : Observable<Booking[]>
  allBookings$ : Observable<Booking[]>
  // workers$ : Observable<Worker[]>
  services$ : Observable<Service[]>
  type

  constructor(
    private route : ActivatedRoute,
    private bookingsService : BookingsService,
    // private workersService : WorkersService,
    private servicesService : ServicesService,
    private authService : AuthService) { }

  ngOnInit() {
    this.userRoles = this.authService.getUserRoles();
    this.route.data.subscribe(data => this.type = data.type);
    this.services$ = this.servicesService.getServices();
    if (this.type == 'current') {
      if (this.userRoles.isAdmin) {
        this.bookings$ = this.bookingsService.getUpcomingBookings()
        this.allBookings$ = this.bookingsService.getUpcomingBookings()
      }
      if (this.userRoles.isWorker) {
        this.bookings$ = this.bookingsService.findBookings(this.userRoles.workerKey);
        this.allBookings$ = this.bookingsService.findBookings(this.userRoles.workerKey);
      }
    }
    if (this.type == 'archive') {
      if (this.userRoles.isAdmin) {
        this.bookings$ = this.bookingsService.getPastBookings();
        this.allBookings$ = this.bookingsService.getPastBookings();
      }
    }
  }

  search = (e) => {
    let filteredBookings = this.bookings$.pipe(map((bookings : Booking[]) => bookings.filter(booking =>
      booking.customer.email.toLowerCase().includes(e.target.value.toLowerCase()))))
    this.bookings$ = filteredBookings;
    this.searchedBookings$ = filteredBookings;
  }

  selectService = (serviceKey) => {
    this.searchedBookings$ ? this.bookings$ = this.searchedBookings$ : this.bookings$ = this.allBookings$;
    let filteredBookings = this.bookings$.pipe(map((bookings : Booking[]) => bookings.filter(booking =>
      booking.service == serviceKey)))
    this.bookings$ = filteredBookings;
  }
}
