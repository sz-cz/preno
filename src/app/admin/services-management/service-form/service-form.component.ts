import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { WorkersService } from './../../../core/services'
import { Observable } from 'rxjs';
import { Worker, Service } from './../../../shared/models';

@Component({
  selector: 'pn-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.sass', './../../admin.component.sass']
})

export class ServiceFormComponent implements OnInit {
  @ViewChild('pickWorkersForm', {static: false}) pickWorkersForm : NgForm;

  serviceForm : FormGroup;
  workers$ : Observable<Worker[]> = this.workersService.getWorkers();
  serviceKey : string;
  isEdition: boolean = false;

  private buildForm = () => this.serviceForm = this.formBuilder.group({
    name: ['', {validators: [Validators.required, Validators.minLength(3)]}],
    duration: ['', {validators: [Validators.required, Validators.min(5), Validators.max(120)]}],
    available: '',
    image: '',
  });

  setService = (service : Service, serviceKey : string) => {
    this.isEdition = true;
    this.serviceKey = serviceKey;
    this.serviceForm.patchValue(service);
  }

  bindWorkers = (serviceID : string) => Object.entries(this.pickWorkersForm.value).forEach(([key, value]) => {
      if (value == true) this.workersService.setService(key, serviceID);
      else if (value == false) this.workersService.unsetService(key, serviceID)
    });

  constructor(
    private formBuilder : FormBuilder, 
    private workersService : WorkersService) { };

  ngOnInit() {
    this.workers$.subscribe();
    this.buildForm()
  }
}
