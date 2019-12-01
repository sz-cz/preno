import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { flatten } from '@angular/compiler';

@Component({
  selector: 'pn-hour-picker',
  templateUrl: './hour-picker.component.html',
  styleUrls: ['./hour-picker.component.sass']
})
export class HourPickerComponent implements OnInit {

  @Input() booking
  @Input() workers
  @Input() services
  @Input() day
  @Output() pickedHour = new EventEmitter()

  pickedDay
  hourSlots = []
  workDay = 1
  chosenHour
  chosenHourEnd
  allBookings = []
  bookings = []

  constructor(private bookingsService : BookingsService) { }

  markOccupiedSlots = () => {
    this.bookingsService.getBookings(this.booking.worker, 'upcoming').subscribe(snapshot => snapshot.map(booking => {
      this.filterBookings(booking)


    this.hourSlots.forEach(slot => {
      // console.log(this.bookings)
      const unableDate = new Date(slot.getTime() + this.services[this.booking.service].duration*60000)
      this.bookings.forEach(booking => {
        if (unableDate > booking.date.toDate()
        && unableDate <= booking.endDate.toDate()) {
          slot.setMilliseconds(3)
          // console.log('dupa')
      }
      //   if (unableDate.getHours() >) {
      //     slot.setMilliseconds(3)
      // }
        if (slot >= booking.date.toDate() && slot < booking.endDate.toDate()) {
          slot.setMilliseconds(1)
          // console.log(slot.getHours() + ':' + slot.getMinutes())
        }
      })
    })
  }))
  }
  filterBookings = booking => {
    // this.bookings.push(booking)
    console.log(this.day.getDate(), booking.date.toDate().getDate())
    this.day.getDate() == booking.date.toDate().getDate() ? this.bookings.push(booking) : null
    // this.bookings = this.allBookings.filter(booking =>
    //   // booking.worker == this.workers[this.booking.worker].id && 
    //   this.day.getDate() == booking.date.toDate().getDate()
    // )

  }

availableHours = () => {
  const workDay = this.workers[this.booking.worker].workhours[this.day.getDay()];
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
    date.getMilliseconds() == 1 || date.getMilliseconds() == 3 ? console.log('zajęte') :
    this.pickedHour.emit(date)
    this.chosenHour = date
    // this.chosenHourEnd = new Date
  }

  ngOnInit() {
    this.availableHours()
    this.markOccupiedSlots()
  }

}
