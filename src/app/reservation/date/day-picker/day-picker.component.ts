import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-day-picker',
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.sass']
})
export class DayPickerComponent implements OnInit {

  @Output() pickedDay = new EventEmitter()
  chosenDay

  constructor() { }

  ngOnInit() {
    this.addPastDays()
    this.showDays(31)
  }
  date = new Date()
  today = this.date.getDate()
  days = []

showDays = number => {
  for (let i = 0; i < number; i++) {
    let dat = new Date(2019, 11, this.today + 1 + i)
    this.days.push(dat)
  }
}

addPastDays = () => {
  const container = document.querySelector('.days')
  for (let i = 0; i < this.date.getDay(); i++) {
    let element = document.createElement('div')
    element.classList.add('fake-day')
    container.prepend(element)
  }
}

pickDay = day => {
  this.pickedDay.emit(day)
  this.chosenDay = day
}
}
