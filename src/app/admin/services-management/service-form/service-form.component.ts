import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService, UiService, WorkersService } from './../../../core/services'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  addService = () : Promise<any> =>
    !this.isEdition ?
      this.servicesService.addService(this.serviceForm.value)
        .then(data => this.bindWorkers(data.id))
        .then(() => this.uiService.openToast('success', 'Usługa została dodana'),
              () => this.uiService.openToast('failure', 'Wystąpił błąd'))
        .then(() => this.router.navigate(['/admin/services']))
      : this.servicesService.updateService(this.serviceKey, this.serviceForm.value)
      .then(() => this.bindWorkers(this.serviceKey))
      .then(() => this.uiService.openToast('success', 'Usługa została zmieniona'),
            (error) => this.uiService.openToast('failure', 'Wystąpił błąd:' + error))
      .then(() => this.router.navigate(['/admin/services']));

  // editService = () : Promise<any> => this.servicesService.updateService(this.serviceForm.value)
  //   .then(data => this.bindWorkers(data.id))
  //   .then(() => this.uiService.openToast('success', 'Usługa została zmieniona'),
  //         () => this.uiService.openToast('failure', 'Wystąpił błąd'))
  //   .then(() => this.router.navigate(['/admin/services']));

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
    private servicesService : ServicesService, 
    private router : Router, 
    private workersService : WorkersService, 
    private uiService : UiService) { };

  ngOnInit() {
    this.workers$.subscribe();
    this.buildForm()
  }
}
