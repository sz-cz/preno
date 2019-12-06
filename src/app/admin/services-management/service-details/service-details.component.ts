import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pn-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.sass']
})
export class ServiceDetailsComponent implements OnInit {

  service

  constructor(private servicesService : ServicesService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.servicesService.getService(this.route.snapshot.params['key']).subscribe(service => this.service = service)
  }

}
