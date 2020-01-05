import { Component, OnInit } from '@angular/core';
import { BookingsService, ServicesService, WorkersService, AuthService } from './../../core/services'
import { Observable } from 'rxjs';
import { Booking, Worker, UserRoles } from 'src/app/shared/models';

@Component({
  selector: 'pn-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.sass', './../admin.component.sass']
})

export class BookingsManagementComponent implements OnInit {
  private userRoles : UserRoles
  bookings$ : Observable<Booking[]> = this.bookingsService.getUpcomingBookings();
  pastBookings$ : Observable<Booking[]> | null
  workers$ : Observable<Worker[]> = this.workersService.getWorkers();

  constructor(
    private bookingsService : BookingsService,
    private servicesService : ServicesService,
    private workersService : WorkersService,
    private authService : AuthService) { }

  ngOnInit() {
    this.userRoles = this.authService.getUserRoles();
    if (this.userRoles.isAdmin) {
      this.bookings$ = this.bookingsService.getUpcomingBookings();
      this.pastBookings$ = this.bookingsService.getPastBookings()
    }
    if (this.userRoles.isWorker) {
      this.bookings$ = this.bookingsService.findBookings(this.userRoles.workerKey);
      // this.pastBookings$ = this.bookingsService.getPastBookings()
    }
  }
}
