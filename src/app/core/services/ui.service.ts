import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DeactivateModalComponent } from 'src/app/shared/components/deactivate-modal/deactivate-modal.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor(private toast : MatSnackBar, private modal : MatDialog) { }

  openToast = (type, message) => this.toast.open(message, '', {
    panelClass: `toast-${type}`,
    duration: 2000});

  openModal = () => this.modal.open(DeactivateModalComponent)
    .afterClosed().pipe(map(result => result)) 
}
