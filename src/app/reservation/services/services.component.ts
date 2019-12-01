import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  @Input() services
  @Input() booking
  @Output() pickedService = new EventEmitter()

  passElement = id => {
    this.pickedService.emit(id)
  }

  constructor() { }

  ngOnInit() {
  }

}
