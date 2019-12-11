import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { BookingsService } from 'src/app/core/services/bookings.service';

@Component({
  selector: 'pn-hour-picker',
  templateUrl: './hour-picker.component.html',
  styleUrls: ['./hour-picker.component.sass']
})
export class HourPickerComponent implements OnInit, OnChanges {

  @Input() booking
  @Input() worker
  @Input() service
  @Input() day
  @Output() pickedHour = new EventEmitter()

  hourSlots = []
  workDay = 1
  chosenHour
  bookings = []

  constructor(private bookingsService : BookingsService) { }

  markOccupiedSlots = () => {
    this.bookingsService.getBookings().subscribe(snapshot => snapshot.map(booking => {
      this.filterBookings(booking)

    this.hourSlots.forEach(slot => {
      const unableDate = new Date(slot.getTime() + this.service.duration*60000)
      this.bookings.forEach(booking => {
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
  }
  filterBookings = booking => {
    if (booking.date) this.day.getDate() == booking.date.toDate().getDate()
      && this.worker.key === booking.worker
      ? this.bookings.push(booking) : null
  }

availableHours = () => {
  const workDay = this.worker.workHours[this.day.getDay()];
  if (workDay === null) {this.workDay = null}
  else {
    const beginingHour = workDay.substring(0,2);
    const endingHour = workDay.substring(6,8);
    const slotsNumber = (endingHour - beginingHour) * 60;
    for (let i = 0; i < slotsNumber; i = i + 10) {
      const date = new Date(this.day.getFullYear(), this.day.getMonth(), this.day.getDate(), beginingHour, i)
      this.hourSlots.push(date)
    }
  }
}

  pickHour = date => {
    if (date.getMilliseconds() == 1 || date.getMilliseconds() == 3) {
      return
    }
    this.pickedHour.emit(date)
    this.chosenHour = date
  }

  ngOnInit() {
    this.availableHours()
    this.markOccupiedSlots()
  }

  ngOnChanges(changes : SimpleChanges) {
    if(!changes['day'].isFirstChange()) {
      this.hourSlots = []
      this.bookings = []
      this.chosenHour = undefined
      this.availableHours()
      this.markOccupiedSlots()
    }

  }

}
