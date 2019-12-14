import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/core/services/workers.service';

@Component({
  selector: 'pn-workers-management',
  templateUrl: './workers-management.component.html',
  styleUrls: ['./workers-management.component.sass', './../admin.component.sass']
})
export class WorkersManagementComponent implements OnInit {

  workers$ = this.workersService.getWorkers()

  constructor(private workersService : WorkersService) { }

  ngOnInit() {
    this.workers$.subscribe()
  }

}
