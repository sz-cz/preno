import { Component, OnInit } from '@angular/core';
import { AuthService, UsersService } from './../../core/services'
import { Observable } from 'rxjs';
import { User, UserRoles } from './../../shared/models/user.model';

@Component({
  selector: 'pn-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.sass', './../admin.component.sass']
})

export class UsersManagementComponent implements OnInit {
  users$ : Observable<User[]> = this.usersService.getUsers();
  userRoles : UserRoles;

  constructor(
    private usersService : UsersService,
    private authService : AuthService) { };

  ngOnInit() {
    this.users$.subscribe()
    this.userRoles = this.authService.getUserRoles()
  }
}