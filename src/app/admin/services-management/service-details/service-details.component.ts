import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pn-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.sass']
})
export class ServiceDetailsComponent implements OnInit {

  service
  serviceKey

  constructor(private servicesService : ServicesService, private route : ActivatedRoute, private router : Router) { }

  deleteService = () => this.servicesService.deleteService(this.serviceKey).then(
    () => this.router.navigate(['/admin/services']),
    () => console.log('nie udało się')
  )

  ngOnInit() {
    this.serviceKey = this.route.snapshot.params['key']
    this.servicesService.getService(this.route.snapshot.params['key']).subscribe(service => this.service = service)
  }

}
