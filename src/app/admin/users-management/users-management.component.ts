import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pn-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.sass', './../admin.component.sass']
})
export class UsersManagementComponent implements OnInit {

  users$ = this.usersService.getUsers()
  auth

  constructor(private usersService : UsersService, private authService : AuthService) { }

  ngOnInit() {
    this.users$.subscribe()
    this.auth = this.authService.getUserRoles()
  }

}
