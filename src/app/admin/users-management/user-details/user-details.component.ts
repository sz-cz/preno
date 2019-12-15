import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'pn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass', './../../admin.component.sass']
})
export class UserDetailsComponent implements OnInit {

  user

  constructor(private usersService : UsersService, private route : ActivatedRoute, private authService : AuthService) { }

  // deleteUser = () => {

  // }

  ngOnInit() {
    this.usersService.getUser(this.route.snapshot.params['key']).subscribe(user => {
      this.user = user;
  })}

}
