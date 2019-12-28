import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})

export class ReservationCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component : CanComponentDeactivate): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate()
  }
  
}
