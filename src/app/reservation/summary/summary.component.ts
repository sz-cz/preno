import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Booking, Worker, Service } from './../../shared/models';

@Component({
  selector: 'pn-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent {
  @Output() booked = new EventEmitter();
  @Input() booking : Booking;
  @Input() worker : Worker;
  @Input() service : Service;

  book = () => this.booked.emit();

  reset = () => {
    this.booking.service = null;
    this.booking.worker = null;
    this.booking.date = null;
    this.booking.endDate = null;
    this.booking.customer.name = '';
    this.booking.customer.email = '';
    this.booking.customer.phone = '';
  }
}
