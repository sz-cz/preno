import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { BookingsService, UiService } from './../../../core/services';
import { Booking, Worker, Service } from './../../../shared/models';

@Component({
  selector: 'pn-hour-picker',
  templateUrl: './hour-picker.component.html',
  styleUrls: ['./hour-picker.component.sass']
})
export class HourPickerComponent implements OnInit, OnChanges {

  @Input() booking : Booking;
  @Input() worker : Worker;
  @Input() service : Service;
  @Input() day : Date;
  @Output() pickedHour = new EventEmitter()

  hourSlots : Array<Date> = []
  workDay = 1
  chosenHour : Date
  bookings : Booking[] = []

  constructor(private bookingsService : BookingsService, private uiService : UiService) { }

  markOccupiedSlots = () => {
    this.bookingsService.getBookings().subscribe(snapshot => snapshot.map((booking : Booking) => {
      this.filterBookings(booking);
      this.hourSlots.forEach((slot : Date) => {
        const unableDate = new Date(slot.getTime() + this.service.duration*60000);
        this.bookings.forEach((booking : Booking) => {
          if (unableDate > booking.date.toDate()
          && unableDate <= booking.endDate.toDate()
          && slot.getMilliseconds() != 1) {
            slot.setMilliseconds(3)
        }
          if (slot >= booking.date.toDate() && slot < booking.endDate.toDate()) {
            slot.setMilliseconds(1)
          }
        })
      })
    }))
  };

  filterBookings = (booking : Booking) => {
    if (booking.date)
      this.day.getDate() == booking.date.toDate().getDate()
      && this.worker.key === booking.worker ?
      this.bookings.push(booking) : null
  };

  availableHours = () => {
    const workDay = this.worker.workHours[this.day.getDay()];
    if (workDay === null) this.workDay = null
    else {
      const beginingHour = workDay.substring(0,2);
      const endingHour = workDay.substring(6,8);
      const slotsNumber = (+endingHour - +beginingHour) * 60;
      for (let i = 0; i < slotsNumber; i = i + 10) {
        const date = new Date(this.day.getFullYear(), this.day.getMonth(), this.day.getDate(), +beginingHour, i)
        this.hourSlots.push(date)
      }
    }
  };

  pickHour = date => {
    if (date.getMilliseconds() == 1) {
      this.uiService.openToast('info', 'Ta godzina jest już zarezerwowana')
      return
    };
    if (date.getMilliseconds() == 3) {
      this.uiService.openToast('info', 'Zbyt mało czasu na tę usługę')
      return
    };
    this.pickedHour.emit(date);
    this.chosenHour = date
  }

  ngOnInit() {
    this.availableHours();
    this.markOccupiedSlots()
  }

  ngOnChanges(changes : SimpleChanges) {
    if(!changes['day'].isFirstChange()) {
      this.hourSlots = [];
      this.bookings = [];
      this.chosenHour = undefined;
      this.availableHours();
      this.markOccupiedSlots()
    }
  }
}