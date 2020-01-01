import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService, UiService } from './../../../core/services'
import { ServiceFormComponent } from './../service-form/service-form.component';

@Component({
  selector: 'pn-service-addition',
  templateUrl: './service-addition.component.html',
  styleUrls: ['./service-addition.component.sass', './../../admin.component.sass']
})
export class ServiceAdditionComponent {
  @ViewChild('serviceForm', {static: false}) serviceForm : ServiceFormComponent;

  constructor(
    private servicesService : ServicesService,
    private uiService : UiService,
    private router : Router) { }

  addService = () => this.servicesService.addService(this.serviceForm.serviceForm.value)
    .then(data => this.serviceForm.bindWorkers(data.id))
    .then(() => this.uiService.openToast('success', 'Usługa została dodana'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(() => this.router.navigate(['/admin/services']))
}
