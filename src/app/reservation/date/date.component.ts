import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'pn-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit, OnChanges {

  @Input() booking
  @Input() worker
  @Input() service
  @Output() pickedDate = new EventEmitter()

  day

  data = {
    day: null,
    month: null,
    year: null,
    hour: null,
    minutes: null
  }

  constructor() { }

  ngOnInit() {
    // this.daysNumber = this.daysInMonth(this.date.getMonth()+1, this.date.getFullYear())
    // this.showDays(7)
    // console.log(this.daysNumber)
  }

  ngOnChanges(changes : SimpleChanges) {
    if(!changes['worker'].isFirstChange()) {
      this.day = null
      this.data.day = null
    }
  }

  onPickedDay = day => {
    this.day = day
    this.data.day = day.getDate();
    this.data.year = day.getFullYear();
    this.data.month = day.getMonth();
  }

  onPickedHour = date => {
    this.pickedDate.emit(date)
  }


}
