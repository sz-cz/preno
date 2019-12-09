import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'pn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  user = this.authService.getUser()

  constructor(private router : Router, private authService : AuthService) { }

  logOut = () => this.authService.logout()

  ngOnInit() {
    console.log(this.user)
  }

}
