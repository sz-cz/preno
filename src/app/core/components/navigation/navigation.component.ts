import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { UserRoles } from './../../../shared/models/user.model';

@Component({
  selector: 'pn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  userRoles : UserRoles;

  constructor(private router : Router, public authService : AuthService) { }

  choosePanel = () => {
    this.userRoles = this.authService.getUserRoles();
    this.userRoles.isAdmin || this.userRoles.isWorker ? this.router.navigate(['/admin']) : this.router.navigate(['/user'])
  }

  logOut = () => this.authService.logout()
    .then(() => this.router.navigate(['']))
}
