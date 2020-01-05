import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services';
import { UserRoles } from '../shared/models';

@Component({
  selector: 'pn-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  userRoles : UserRoles;

  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.userRoles = this.authService.getUserRoles()
  }
}