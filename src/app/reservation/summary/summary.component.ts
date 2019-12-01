import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  @Output() booked = new EventEmitter()

  @Input() booking
  @Input() workers
  @Input() services

  book = () => {
    this.booked.emit()
  }

  constructor() { }

  ngOnInit() {
  }

}
