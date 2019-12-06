import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.sass']
})
export class WorkersComponent implements OnInit {

  @Input() workers
  @Input() booking
  @Output() pickedWorker = new EventEmitter();

  passElement = id => {
    this.pickedWorker.emit(id)
  }

  constructor() { }

  ngOnInit() {
    // this.workers.subscribe()
  }

}
