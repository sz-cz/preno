import { Component, OnInit, OnChanges, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'pn-day-picker',
  templateUrl: './day-picker.component.html',
  styleUrls: ['./day-picker.component.sass']
})
export class DayPickerComponent implements OnInit, OnChanges {

  @Output() pickedDay = new EventEmitter()
  @Input() worker
  chosenDay

  constructor(private uiService : UiService) { }

  ngOnInit() {
    this.addPastDays()
    this.setDays(31)
  }

  ngOnChanges(changes : SimpleChanges) {
    if(!changes['worker'].isFirstChange()) {
      this.chosenDay = null
      this.days = []
      this.setDays(31)
    }
  }

  date = new Date()
  today = this.date.getDate()
  days = []

setDays = number => {
  for (let i = 0; i < number; i++) {
    let dat = new Date(this.date.getFullYear(), this.date.getMonth(), this.today + 1 + i)
    this.days.push(this.markDaysOff(dat))
  }
}

markDaysOff = (day : Date) => {
  if(this.worker.workHours[day.getDay()] == '') day.setMilliseconds(5)
  return day
}

addPastDays = () => {
  const container = document.querySelector('.days')
  for (let i = 0; i < this.date.getDay(); i++) {
    let element = document.createElement('div')
    element.classList.add('day', 'day--empty')
    container.prepend(element)
  }
}

pickDay = day => {
  if (day.getMilliseconds() == 5) {
    this.uiService.openToast('info', 'Pracownik ma wolne tego dnia')
    return
  }
  this.pickedDay.emit(day)
  this.chosenDay = day
}
}
