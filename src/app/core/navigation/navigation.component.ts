import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'pn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  userRoles

  constructor(private router : Router, private authService : AuthService) { }

  choosePanel = () => {
    this.userRoles = this.authService.getUserRoles();
    this.userRoles.isAdmin == true ? this.router.navigate(['/admin']) : this.router.navigate(['/user'])
  }

  logOut = () => this.authService.logout()

  ngOnInit() {
  }

}
