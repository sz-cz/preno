import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkersService } from 'src/app/core/services/workers.service';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'pn-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.sass']
})
export class WorkerFormComponent implements OnInit {

  workerForm : FormGroup

  buildForm = () => {this.workerForm = this.formBuilder.group({
    name: ['Artur', {validators: [Validators.required]}],
    description: ['', {validators: [Validators.required]}],
    image: '',
    services: this.formBuilder.group({
      "0IyxGP51E3rSvUZfJdPP": false,
      "80MBmjEOeSc44jluVWjf": false,
      "ELaMKPQZ0ejHeaOzzBtS": false,
      "UzXbii0DDveQJLcOQbAJ": false,
      "sbTMY0WxJ3mh7vsDUPtK": false
    }),
    workHours: this.formBuilder.array(['', '', '', '', '', '', ''])
  })
  this.mapControlPaths()
  return this.workerForm
}

  services = []

  mapControlPaths = () => {
    this.servicesService.getServicesKeys().subscribe(res => res.map(key => 
      this.workerForm.value.services[key] = false
        )
    )
  }

  addWorker = () => this.workersService.addWorker(this.workerForm.value)
    .then(ref => ref, ref => ref)

  constructor(private formBuilder : FormBuilder, private workersService : WorkersService, private servicesService : ServicesService) { }

  ngOnInit() {
    this.buildForm()
    // this.mapControlPaths()
    setTimeout(() => this.servicesService.getServices().subscribe(res =>  res.map(element => this.services.push(element))), 5000)
    // this.servicesService.getServices().subscribe(res =>  res.map(element => this.services.push(element)))
  }
}
