import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'pn-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.sass', './../../admin.component.sass']
})
export class ServiceDetailsComponent implements OnInit {

  service
  serviceKey

  constructor(private servicesService : ServicesService, private route : ActivatedRoute, private router : Router, private uiService : UiService) { }

  deleteService = () => this.servicesService.deleteService(this.serviceKey)
    .then(() => this.uiService.openToast('success', 'Usługa została usunięta'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(() => this.router.navigate(['/admin/services']))

  ngOnInit() {
    this.serviceKey = this.route.snapshot.params['key']
    this.servicesService.getService(this.route.snapshot.params['key']).subscribe(service => this.service = service)
  }

}
