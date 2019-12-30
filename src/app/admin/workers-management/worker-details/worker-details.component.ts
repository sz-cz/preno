import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService, UiService, WorkersService } from './../../../core/services';
import { Worker, Booking } from './../../../shared/models';
import { Observable } from 'rxjs'

@Component({
  selector: 'pn-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.sass', './../../admin.component.sass']
})
export class WorkerDetailsComponent implements OnInit {
  worker : Worker;
  workerKey : string;
  bookings$ : Observable<Booking[]>;

  constructor(
    private workersService : WorkersService,
    private bookingsService : BookingsService, 
    private route : ActivatedRoute, 
    private router : Router, 
    private uiService : UiService) { };

  deleteWorker = () => this.workersService.deleteWorker(this.workerKey)
    .then(() => this.uiService.openToast('success', 'Pracownik został usunięty'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(() => this.router.navigate(['/admin/workers']));

  ngOnInit() {
    this.workerKey = this.route.snapshot.params['key'];
    this.workersService.getWorker(this.workerKey).subscribe((worker : Worker) => {
      this.worker = worker;
      this.bookings$ = this.bookingsService.findBookings(this.workerKey)
    })
  }
}