import { Component, OnInit } from '@angular/core';
import { WorkersService } from 'src/app/core/services/workers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingsService } from 'src/app/core/services/bookings.service';
import { UiService } from 'src/app/core/services/ui.service';

@Component({
  selector: 'pn-worker-details',
  templateUrl: './worker-details.component.html',
  styleUrls: ['./worker-details.component.sass', './../../admin.component.sass']
})
export class WorkerDetailsComponent implements OnInit {

  worker
  workerKey
  bookings$

  constructor(private workersService : WorkersService, private bookingsService : BookingsService, private route : ActivatedRoute, private router : Router, private uiService : UiService) { }

  deleteWorker = () => this.workersService.deleteWorker(this.workerKey)
    .then(() => this.uiService.openToast('success', 'Pracownik został usunięty'),
          () => this.uiService.openToast('failure', 'Wystąpił błąd'))
    .then(() => this.router.navigate(['/admin/workers']))

  ngOnInit() {
    this.workerKey = this.route.snapshot.params['key']
    this.workersService.getWorker(this.route.snapshot.params['key']).subscribe(worker => {
      this.worker = worker;
      this.bookings$ = this.bookingsService.findBookings(this.worker.key)
    })
  }

}
