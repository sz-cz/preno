import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-collection-element',
  templateUrl: './collection-element.component.html',
  styleUrls: ['./collection-element.component.sass']
})
export class CollectionElementComponent implements OnInit {

  @Input() elements
  @Input() type
  @Input() booking
  @Output() pickedElement = new EventEmitter()
  condition;


  pickElement = element => {
    return this.pickedElement.emit(element)
  }

  constructor() { }

  ngOnInit() {
  }

}
