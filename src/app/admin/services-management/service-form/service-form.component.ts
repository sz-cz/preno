import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ServicesService } from 'src/app/core/services/services.service';
import { Router } from '@angular/router';
import { WorkersService } from 'src/app/core/services/workers.service';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'pn-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.sass']
})
export class ServiceFormComponent implements OnInit {

  @ViewChild('pickWorkersForm', {static: false}) pickWorkersForm : NgForm;

  serviceForm : FormGroup;
  workers$ = this.workersService.getWorkers() 

  private buildForm = () => this.serviceForm = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}],
    duration: ['', {validators: [Validators.required]}],
    available: '',
    image: '',
    // key: '',
  })

  addService = () => {
    this.servicesService.addService(this.serviceForm.value)
      .then(data => this.bindWorkers(data.id))
      .then(() => this.uiService.openToast('success', 'Usługa została dodana'),
            () => this.uiService.openToast('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['/admin/services']))
  }

  bindWorkers = (serviceID : string) => {
    // this.pickWorkersForm.value
    Object.entries(this.pickWorkersForm.value).forEach(([key, value]) => {
      if (value == true) {
        this.workersService.setService(key, serviceID)
        console.log(value)
        console.log(key)
      }
    })
  }

  constructor(private formBuilder : FormBuilder, private servicesService : ServicesService, private router : Router, private workersService : WorkersService, private uiService : UiService) { }

  ngOnInit() {
    this.workers$.subscribe()
    this.buildForm()
  }

}
