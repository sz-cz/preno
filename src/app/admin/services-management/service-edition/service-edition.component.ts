import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService, UiService } from 'src/app/core/services';
import { Service } from './../../../shared/models';
import { ServiceFormComponent } from './../service-form/service-form.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'pn-service-edition',
  templateUrl: './service-edition.component.html',
  styleUrls: ['./service-edition.component.sass', './../../admin.component.sass']
})
export class ServiceEditionComponent implements OnInit, AfterViewInit {
  @ViewChild('serviceForm', {static: false}) serviceForm : ServiceFormComponent;
  service : Service;
  serviceKey : string;

  constructor(
    private servicesService : ServicesService,
    private uiService : UiService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.serviceKey = this.route.snapshot.params['key'];
  }

  ngAfterViewInit() {
    this.servicesService.getService(this.serviceKey).pipe(tap(service => this.serviceForm.setService(service, this.serviceKey)))
      .subscribe(service => this.service = service)
  }

  editService = () => this.servicesService.updateService(this.serviceKey, this.serviceForm.serviceForm.value)
    .then(() => this.serviceForm.bindWorkers(this.serviceKey))
    .then(() => this.uiService.openToast('success', 'Usługa została zmieniona'),
          (error) => this.uiService.openToast('failure', 'Wystąpił błąd:' + error))
    .then(() => this.router.navigate(['/admin/services']));
}
