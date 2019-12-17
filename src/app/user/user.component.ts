import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { AuthService } from '../core/services/auth.service';
import { BookingsService } from '../core/services/bookings.service';
import { ServicesService } from '../core/services/services.service';
import { ServicePipe } from '../shared/pipes/service.pipe';

@Component({
  selector: 'pn-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  userUID
  user
  bookings$

  constructor(private usersService : UsersService, private authService : AuthService, private bookingsService : BookingsService, private servicesService : ServicesService) { }

  ngOnInit() {
    this.userUID = this.authService.getUser().uid
    this.usersService.getUser(this.userUID).subscribe(user => {
      this.user = user
      this.bookingsService.getUserBookings(this.user.email).subscribe(res => this.bookings$ = res)
    })

  }

}
