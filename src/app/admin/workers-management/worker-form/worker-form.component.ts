import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService, UiService, WorkersService } from './../../../core/services';
import { Service } from './../../../shared/models';

@Component({
  selector: 'pn-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.sass', './../../admin.component.sass']
})
export class WorkerFormComponent implements OnInit {
  @ViewChild('pickServicesForm', {static: false}) pickServicesForm : NgForm;
  workerForm : FormGroup;

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

  services : Array<Service> = []

  addWorker = () => {
    this.workerForm.value.services = this.pickServicesForm.value;
    this.workersService.addWorker(this.workerForm.value)
      .then(() => this.uiService.openToast('success', 'Pracownik został dodany'),
            () => this.uiService.openToast('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['/admin/workers']), ref => ref)
  };

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