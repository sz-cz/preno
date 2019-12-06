import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/core/services/services.service';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'pn-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.sass']
})
export class BookingDetailsComponent implements OnInit {

  booking
  service
  worker

  constructor(private bookingsService : BookingsService, private servicesService : ServicesService, private workersService : WorkersService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.bookingsService.getBooking(this.route.snapshot.params['key']).subscribe(booking => {
      this.booking = booking;
      this.servicesService.getService(this.booking.service).subscribe(service => this.service = service)
      this.workersService.getWorker(this.booking.worker).subscribe(worker => this.worker = worker)
    })

  }

}
