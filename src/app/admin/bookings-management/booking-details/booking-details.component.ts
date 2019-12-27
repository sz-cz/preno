import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService, ServicesService, UiService, WorkersService } from '../../../core/services'
import { Booking, Service, Worker } from 'src/app/shared/models';

@Component({
  selector: 'pn-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.sass', './../../admin.component.sass']
})
export class BookingDetailsComponent implements OnInit {

  booking : Booking;
  bookingKey : string;
  service : Service;
  worker : Worker;

  constructor(
    private bookingsService : BookingsService,
    private servicesService : ServicesService,
    private workersService : WorkersService,
    private route : ActivatedRoute,
    private router : Router,
    private uiService : UiService) { };

  deleteBooking = () => {
    this.bookingsService.deleteBooking(this.bookingKey)
    .then(() => this.uiService.openToast('success', 'Rezerwacja została usunięta'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(
          () => this.router.navigate(['/admin/bookings']))
  };

  ngOnInit() {
    this.bookingKey = this.route.snapshot.params['key'];
    this.bookingsService.getBooking(this.route.snapshot.params['key']).subscribe((booking : Booking) => {
      this.booking = booking;
      if (booking) {
        this.servicesService.getService(this.booking.service).subscribe((service : Service) => this.service = service);
        this.workersService.getWorker(this.booking.worker).subscribe((worker : Worker) => this.worker = worker)
      }
    })
  }
}
