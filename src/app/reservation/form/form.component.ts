import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() completedForm = new EventEmitter()

  constructor() { }

  onSubmit = (form) => {
    console.log(form.value)
    this.completedForm.emit(form.value)
  }

  ngOnInit() {
  }

}
