import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'pn-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.sass']
})
export class ServiceFormComponent implements OnInit {

  serviceForm : FormGroup;

  private buildForm = () => this.serviceForm = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}],
    duration: ['', {validators: [Validators.required]}],
    available: '',
    image: '',
    // key: '',
  })

  addService = () => this.servicesService.addService(this.serviceForm.value)
    .then(ref => ref, ref => ref)

  constructor(private formBuilder : FormBuilder, private servicesService : ServicesService) { }

  ngOnInit() {
    this.buildForm()
  }

}
