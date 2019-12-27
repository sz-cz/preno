import { Component, OnInit } from '@angular/core';
import { WorkersService } from './../../core/services';
import { Observable } from 'rxjs';
import { Worker } from './../../shared/models';

@Component({
  selector: 'pn-workers-management',
  templateUrl: './workers-management.component.html',
  styleUrls: ['./workers-management.component.sass', './../admin.component.sass']
})

export class WorkersManagementComponent implements OnInit {
  workers$ : Observable<Worker[]> = this.workersService.getWorkers()

  constructor(private workersService : WorkersService) { }

  ngOnInit() {
    this.workers$.subscribe()
  }

}
