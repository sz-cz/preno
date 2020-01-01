import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkerFormComponent } from './../worker-form/worker-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkersService, UiService } from 'src/app/core/services';
import { tap } from 'rxjs/operators';
import { Worker } from './../../../shared/models'

@Component({
  selector: 'pn-worker-edition',
  templateUrl: './worker-edition.component.html',
  styleUrls: ['./worker-edition.component.sass', './../../admin.component.sass']
})
export class WorkerEditionComponent implements OnInit {
  @ViewChild('workerForm', {static: false}) workerForm : WorkerFormComponent
  workerKey : string

  constructor(
    private workersService : WorkersService,
    private uiService : UiService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.workerKey = this.route.snapshot.params['key']
    this.workersService.getWorker(this.workerKey).pipe(tap((worker : Worker) => this.workerForm.setForm(worker))).subscribe()
  }

  editWorker = () => {
    this.workerForm.workerForm.value.services = this.workerForm.pickServicesForm.value;
    this.workersService.updateWorker(this.workerKey, this.workerForm.workerForm.value)
      .then(() => this.uiService.openToast('success', 'Dane pracownika zostały zmienione'),
            (error) => this.uiService.openToast('failure', 'Wystąpił błąd: ' + error))
      .then(() => this.router.navigate(['/admin/workers']), ref => ref)
  };

}
