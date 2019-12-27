import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Worker, Service, Booking } from '../../models';
import { Observable } from 'rxjs';


@Component({
  selector: 'pn-collection-element',
  templateUrl: './collection-element.component.html',
  styleUrls: ['./collection-element.component.sass']
})
export class CollectionElementComponent implements OnInit {

  showSpinner = true

  @Input() elements : Observable<Worker[] | Service[]>
  @Input() type : string;
  @Input() booking : Booking;
  @Output() pickedElement = new EventEmitter();

  pickElement = element => this.pickedElement.emit(element);

  ngOnInit() {
    this.elements.subscribe(response => response ? this.showSpinner = false : this.showSpinner = true)
  }

}
