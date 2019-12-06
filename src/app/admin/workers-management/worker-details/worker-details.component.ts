import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/core/services/workers.service';
import { ActivatedRoute } from '@angular/router';
import { BookingsService } from 'src/app/core/services/bookings.service';

@Component({
  selector: 'pn-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.sass']
})
export class WorkerDetailsComponent implements OnInit {

  worker
  bookings$

  constructor(private workersService : WorkersService, private bookingsService : BookingsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.workersService.getWorker(this.route.snapshot.params['key']).subscribe(worker => {
      this.worker = worker;
      this.bookings$ = this.bookingsService.findBookings(this.worker.key)
      console.log(this.bookings$)
    })
  }

}
