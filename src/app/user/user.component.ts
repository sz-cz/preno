import { Component, OnInit } from '@angular/core';
import { ServicePipe } from '../shared/pipes/service.pipe';
import { AuthService, BookingsService, UsersService } from './../core/services'
import { User, Booking, UserRoles } from './../shared/models'

@Component({
  selector: 'pn-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})

export class UserComponent implements OnInit {
  userUID : string;
  user : User;
  userRoles : UserRoles
  bookings$ : Array<Booking>;

  constructor(
    private usersService : UsersService,
    private authService : AuthService, 
    private bookingsService : BookingsService) { };

  ngOnInit() {
    this.userUID = this.authService.getUser().uid;
    this.userRoles = this.authService.getUserRoles();
    this.usersService.getUser(this.userUID).subscribe((user : User) => {
      this.user = user;
      this.bookingsService.getUserBookings(this.user.email).subscribe(res => this.bookings$ = res)
    });
  }
  // canDeactivate = () => true
}
