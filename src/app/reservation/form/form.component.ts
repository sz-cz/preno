import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { CustomerForm } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'pn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  @Output() completedForm = new EventEmitter()

  form : CustomerForm  = {
    name: '',
    email: '',
    phone: ''
  }


  constructor(private usersService : UsersService) { }

  onSubmit = () => {
    this.completedForm.emit(this.form)
  }

  ngOnInit() {
    this.usersService.getCurrentUser().subscribe((user : CustomerForm) => this.form = user)
  }
}