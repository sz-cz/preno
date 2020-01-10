import { Component, OnInit } from '@angular/core';
import { BookingsService, WorkersService, AuthService } from './../../core/services'
import { Observable } from 'rxjs';
import { Booking, Worker, UserRoles } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router'
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'pn-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.sass', './../admin.component.sass']
})

export class BookingsManagementComponent implements OnInit {
  private userRoles : UserRoles
  bookings$ : Observable<Booking[]>
  workers$ : Observable<Worker[]>
  type

  constructor(
    private route : ActivatedRoute,
    private bookingsService : BookingsService,
    private workersService : WorkersService,
    private authService : AuthService) { }

  ngOnInit() {
    this.userRoles = this.authService.getUserRoles();
    this.route.data.subscribe(data => this.type = data.type)
    if (this.type == 'current') {
      if (this.userRoles.isAdmin) {
        this.bookings$ = this.bookingsService.getUpcomingBookings()
      }
      if (this.userRoles.isWorker) {
        this.bookings$ = this.bookingsService.findBookings(this.userRoles.workerKey);
      }
    }
    if (this.type == 'archive') {
      if (this.userRoles.isAdmin) {
        this.bookings$ = this.bookingsService.getPastBookings();
      }
    }
  }

  search = (e) => {
    let filteredBookings;
    filteredBookings = this.bookings$.pipe(map((bookings : Booking[]) => bookings.filter(booking =>
      booking.customer.email.toLowerCase().includes(e.target.value.toLowerCase()))))
    this.bookings$ = filteredBookings;
  }
}
