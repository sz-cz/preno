import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking, Worker } from './../../shared/models';

@Component({
  selector: 'pn-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.sass']
})
export class WorkersComponent {

  @Input() workers : Observable<Worker[]>;
  @Input() booking : Booking;
  @Output() pickedWorker = new EventEmitter();

  passElement = (key : String) => this.pickedWorker.emit(key)
}
