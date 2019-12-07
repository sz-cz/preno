import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'pn-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.sass']
})
export class WorkersComponent implements OnInit {

  @Input() workers : Observable<Worker>
  @Input() booking : Observable<Worker>
  @Output() pickedWorker = new EventEmitter();

  passElement = (key : String) => this.pickedWorker.emit(key)

  constructor() { }

  ngOnInit() {
  }

}
