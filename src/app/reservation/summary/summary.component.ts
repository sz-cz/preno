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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes : SimpleChanges) {
    if(!changes['booking'].isFirstChange()) {
    }
  }

}
