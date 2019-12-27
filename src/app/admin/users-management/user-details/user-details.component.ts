import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService, UsersService } from './../../../core/services';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'pn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass', './../../admin.component.sass']
})
export class UserDetailsComponent implements OnInit {
  user : User

  constructor(
    private usersService : UsersService, 
    private route : ActivatedRoute, 
    private authService : AuthService) { }

  makeAdmin = () => this.authService.makeAdmin(this.user.email)

  // deleteUser = () => {

  // }

  ngOnInit() {
    this.usersService.getUser(this.route.snapshot.params['key']).subscribe((user : User) => this.user = user)
  }
}
