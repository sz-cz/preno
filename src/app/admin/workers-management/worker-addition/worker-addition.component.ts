import { Component, ViewChild } from '@angular/core';
import { WorkerFormComponent } from './../worker-form/worker-form.component';
import { Router } from '@angular/router';
import { UiService, WorkersService } from './../../../core/services';

@Component({
  selector: 'pn-worker-addition',
  templateUrl: './worker-addition.component.html',
  styleUrls: ['./worker-addition.component.sass', './../../admin.component.sass']
})
export class WorkerAdditionComponent {
  @ViewChild('workerForm', {static: false}) workerForm : WorkerFormComponent

  constructor(
    private workersService : WorkersService,
    private uiService : UiService,
    private router : Router) { }

  addWorker = () => {
    this.workerForm.workerForm.value.services = this.workerForm.pickServicesForm.value;
    this.workersService.addWorker(this.workerForm.workerForm.value)
      .then(() => this.uiService.openToast('success', 'Pracownik został dodany'),
            () => this.uiService.openToast('failure', 'Wystąpił błąd'))
      .then(() => this.router.navigate(['/admin/workers']), ref => ref)
  };
}
