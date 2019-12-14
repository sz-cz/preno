import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/core/services/services.service';

@Component({
  selector: 'pn-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.sass', './../admin.component.sass']
})
export class ServicesManagementComponent implements OnInit {

  services$ = this.servicesService.getServices()

  constructor(private servicesService : ServicesService) { }

  ngOnInit() {
    this.services$.subscribe()
  }

}
