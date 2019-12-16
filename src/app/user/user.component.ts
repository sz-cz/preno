import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'pn-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  userUID
  user

  constructor(private usersService : UsersService, private authService : AuthService) { }

  ngOnInit() {
    this.userUID = this.authService.getUser().uid
    this.usersService.getUser(this.userUID).subscribe(user => this.user = user)
  }

}
