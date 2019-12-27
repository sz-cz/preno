import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Booking, Service } from './../../shared/models';
import { Observable } from 'rxjs'

@Component({
  selector: 'pn-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})

export class ServicesComponent {
  @Input() services : Observable<Service[]>;
  @Input() booking : Booking;
  @Output() pickedService = new EventEmitter()

  passElement = id => this.pickedService.emit(id)
}
