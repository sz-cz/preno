import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  constructor(private toast : MatSnackBar) { }

  openToast = (type, message) => this.toast.open(message, '', {
    panelClass: `toast-${type}`,
    duration: 2000})
}
