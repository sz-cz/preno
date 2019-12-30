import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/core/services';
import { Service } from './../../../shared/models';
import { ServiceFormComponent } from './../service-form/service-form.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'pn-service-edition',
  templateUrl: './service-edition.component.html',
  styleUrls: ['./service-edition.component.sass']
})
export class ServiceEditionComponent implements OnInit, AfterViewInit {
  @ViewChild('serviceForm', {static: false}) serviceForm : ServiceFormComponent;
  service : Service;
  serviceKey : string;

  constructor(private servicesService : ServicesService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.serviceKey = this.route.snapshot.params['key'];
  }

  ngAfterViewInit() {
    this.servicesService.getService(this.serviceKey).pipe(tap(service => this.serviceForm.setService(service, this.serviceKey)))
      .subscribe(service => this.service = service)
  }

}
