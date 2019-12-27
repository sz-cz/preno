import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Booking, Worker, Service } from './../../shared/models';

@Component({
  selector: 'pn-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnChanges {

  @Input() booking : Booking;
  @Input() worker : Worker;
  @Input() service : Service;
  @Output() pickedDate = new EventEmitter();

  day : Date;
  data = {
    day: null,
    month: null,
    year: null,
    hour: null,
    minutes: null
  };

  ngOnChanges(changes : SimpleChanges) {
    if (!changes['worker'].isFirstChange()) {
      this.day = null;
      this.data.day = null
    }
  }

  onPickedDay = (day : Date) => {
    this.day = day
    this.data.day = day.getDate();
    this.data.year = day.getFullYear();
    this.data.month = day.getMonth();
  };

  onPickedHour = (date : Date) => {
    this.pickedDate.emit(date)
  }
}
