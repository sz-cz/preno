import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'pn-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  constructor(private authService : AuthService, private router : Router, private userService : UsersService) { }

  register = registerForm => {
    if(registerForm.value.password == registerForm.value.password2) {
      return this.authService.register(registerForm.value.login, registerForm.value.password)
        .then(cred => this.userService.createUser(cred.user.uid, registerForm.value.name, registerForm.value.login, registerForm.value.phone))
        .then(() => this.router.navigate(['/login']))
    }
    console.log('Powtórzone hasło jest różne od pierwszego')

  }
  ngOnInit() {
  }

}
