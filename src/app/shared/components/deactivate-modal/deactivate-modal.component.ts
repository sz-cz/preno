import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'pn-deactivate-modal',
  templateUrl: './deactivate-modal.component.html',
  styleUrls: ['./deactivate-modal.component.sass']
})
export class DeactivateModalComponent {

  constructor(public dialogRef: MatDialogRef<DeactivateModalComponent>) {}

  onDecision = (decision) => this.dialogRef.close(decision)
}
