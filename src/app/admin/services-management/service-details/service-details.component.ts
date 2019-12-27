import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService, UiService } from './../../../core/services'
import { Service } from 'src/app/shared/models';

@Component({
  selector: 'pn-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.sass', './../../admin.component.sass']
})
export class ServiceDetailsComponent implements OnInit {
  service : Service
  serviceKey : string

  constructor(private servicesService : ServicesService, private route : ActivatedRoute, private router : Router, private uiService : UiService) { }

  deleteService = () => this.servicesService.deleteService(this.serviceKey)
    .then(() => this.uiService.openToast('success', 'Usługa została usunięta'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(() => this.router.navigate(['/admin/services']));

  ngOnInit() {
    this.serviceKey = this.route.snapshot.params['key'];
    this.servicesService.getService(this.route.snapshot.params['key']).subscribe((service : Service) => this.service = service)
  }

}
