import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { WorkersService } from 'src/app/core/services/workers.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'pn-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.sass', './../../admin.component.sass']
})
export class WorkerFormComponent implements OnInit {

  @ViewChild('pickServicesForm', {static: false}) pickServicesForm : NgForm;
  workerForm : FormGroup

  buildForm = () => {
    this.workerForm = this.formBuilder.group({
    name: ['', {validators: [Validators.required]}],
    description: ['', {validators: [Validators.required]}],
    image: '',
    // services: this.formBuilder.group(this.mapControlPaths()),
    services: {},
    workHours: this.formBuilder.array(['', '', '', '', '', '', ''])
  })
  return this.workerForm
}

  services = []

  // mapControlPaths = () => {
  //   let services = {}
  //   this.servicesService.getServicesKeys().subscribe(res => res.map(key => 
  //     services[key] = false
  //       )
  //   )
  //   return services
  // }

  addWorker = () => {
    this.workerForm.value.services = this.pickServicesForm.value
    this.workersService.addWorker(this.workerForm.value)
      .then(() => this.uiService.openToast('success', 'Pracownik został dodany'),
            () => this.uiService.openToast('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['/admin/workers']), ref => ref)
  }


  constructor(private formBuilder : FormBuilder, private workersService : WorkersService, private servicesService : ServicesService, private router : Router, private uiService : UiService) { }

  ngOnInit() {
    this.buildForm()
    this.servicesService.getServices().subscribe(res =>  res.map(element => {
      this.services.push(element)
    }
    ))
  }
}
