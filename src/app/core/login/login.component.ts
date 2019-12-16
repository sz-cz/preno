import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'pn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  constructor(private authService : AuthService, private router : Router) { }

  logIn = loginForm => this.authService.login(loginForm.value.login, loginForm.value.password)
    .then(admin => {
      if (admin == true) this.router.navigate(['/admin'])
      else this.router.navigate([''])
    })
    // .then(() => this.router.navigate(['/admin']))

  ngOnInit() {
  }

}
