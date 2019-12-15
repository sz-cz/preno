import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'pn-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.sass', './../admin.component.sass']
})
export class UsersManagementComponent implements OnInit {

  users$ = this.usersService.getUsers()

  constructor(private usersService : UsersService) { }

  ngOnInit() {
    this.users$.subscribe()
  }

}
