import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'pn-bookings-management',
  templateUrl: './bookings-management.component.html',
  styleUrls: ['./bookings-management.component.sass', './../admin.component.sass']
})
export class BookingsManagementComponent implements OnInit {

  bookings$ = this.bookingsService.getBookings()
  // services$ = this.servicesService.getServices()
  workers$ = this.workersService.getWorkers()

  constructor(private bookingsService : BookingsService, private servicesService : ServicesService, private workersService : WorkersService) { }

  // getServiceName = key => this.servicesService.getService(key).subscribe(item => console.log(item))

  ngOnInit() {
      this.bookings$.subscribe()
      // this.services$.subscribe()

  }

}
