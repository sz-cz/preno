import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService, UiService, WorkersService } from './../../../core/services';
import { Service, Worker } from './../../../shared/models';

@Component({
  selector: 'pn-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.sass', './../../admin.component.sass']
})
export class WorkerFormComponent implements OnInit {
  @ViewChild('pickServicesForm', {static: false}) pickServicesForm : NgForm;
  workerForm : FormGroup;
  isEdition : boolean = false;
  worker : Worker;

  buildForm = () : FormGroup => {
    this.workerForm = this.formBuilder.group({
    name: ['', {validators: [Validators.required, Validators.minLength(2)]}],
    description: '',
    image: '',
    services: {},
    workHours: this.formBuilder.array(['', '', '', '', '', '', ''])
  })
  return this.workerForm
}
  setForm = (worker : Worker) => {
    this.isEdition = true;
    this.worker = worker;
    this.workerForm.patchValue(worker);
  }

  services : Array<Service> = []

  constructor(
    private formBuilder : FormBuilder, 
    private workersService : WorkersService, 
    private servicesService : ServicesService, 
    private router : Router, 
    private uiService : UiService) { };

  ngOnInit() {
    this.buildForm();
    this.servicesService.getServices().subscribe(res =>  res.map((service : Service) => this.services.push(service)))
  }
}