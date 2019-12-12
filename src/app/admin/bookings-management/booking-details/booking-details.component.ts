import { Component, OnInit } from '@angular/core';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/core/services/services.service';
import { WorkersService } from 'src/app/core/services/workers.service';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'pn-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.sass']
})
export class BookingDetailsComponent implements OnInit {

  booking
  bookingKey
  service
  worker

  constructor(
    private bookingsService : BookingsService,
    private servicesService : ServicesService,
    private workersService : WorkersService,
    private route : ActivatedRoute,
    private router : Router,
    private uiService : UiService) { }

  deleteBooking = () => {
    this.bookingsService.deleteBooking(this.bookingKey)
    .then(() => this.uiService.openToast('success', 'Rezerwacja została usunięta'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(
          () => this.router.navigate(['/admin/bookings']))
  }

  ngOnInit() {
    this.bookingKey = this.route.snapshot.params['key']
    // this.booking = this.route.snapshot.data['booking']
    this.bookingsService.getBooking(this.route.snapshot.params['key']).subscribe(booking => {
      this.booking = booking;
      if (booking) {
        this.servicesService.getService(this.booking.service).subscribe(service => this.service = service)
        this.workersService.getWorker(this.booking.worker).subscribe(worker => this.worker = worker)
      }

    })


  }

}
