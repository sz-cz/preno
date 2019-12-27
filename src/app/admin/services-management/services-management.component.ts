import { Component, OnInit } from '@angular/core';
import { ServicesService } from './../../core/services';
import { Observable } from 'rxjs';
import { Service } from 'src/app/shared/models';

@Component({
  selector: 'pn-services-management',
  templateUrl: './services-management.component.html',
  styleUrls: ['./services-management.component.sass', './../admin.component.sass']
})
export class ServicesManagementComponent implements OnInit {
  services$ : Observable<Service[]> = this.servicesService.getServices()

  constructor(private servicesService : ServicesService) { }

  ngOnInit() {
    this.services$.subscribe()
  }

}
