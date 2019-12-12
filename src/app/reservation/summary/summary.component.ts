import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'pn-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit, OnInit {

  @Output() booked = new EventEmitter()

  @Input() booking
  @Input() worker
  @Input() service

  book = () => {
    this.booked.emit()
  }

  reset = () => {
    this.booking.service = null;
    this.booking.worker = null;
    this.booking.date = null;
    this.booking.endDate = null;
    this.booking.customer.name = '';
    this.booking.customer.email = '';
    this.booking.customer.phone = '';
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) {
    if(!changes['booking'].isFirstChange()) {
    }
  }

}
