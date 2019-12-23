import { Component, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-collection-element',
  templateUrl: './collection-element.component.html',
  styleUrls: ['./collection-element.component.sass']
})
export class CollectionElementComponent implements OnInit {

  showSpinner = true

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
    this.elements.subscribe(response => response ? this.showSpinner = false : this.showSpinner = true)
  }

  // ngOnChanges(changes : SimpleChanges) {
  //   if(changes['elements']) {
  //     this.showSpinner = true
  //     this.elements.subscribe(response => response ? this.showSpinner = false : this.showSpinner = true)
  //   }
  // }

}
