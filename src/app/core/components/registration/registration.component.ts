import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UiService, UsersService } from './../../services'

@Component({
  selector: 'pn-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent {

  constructor(
    private authService : AuthService, 
    private router : Router, 
    private userService : UsersService, 
    private uiService : UiService) { }

  register = registerForm => {
    if(registerForm.value.password == registerForm.value.password2) {
      return this.authService.register(registerForm.value.login, registerForm.value.password)
        .then(cred => this.userService.createUser(cred.user.uid, registerForm.value.name, registerForm.value.login, registerForm.value.phone))
        .then(() => this.uiService.openToast('success', 'Użytkownik został zarejestrowany'))
        .then(() => this.router.navigate(['/login']))
        .catch(error => this.uiService.openToast('failure', error))
    };
    this.uiService.openToast('failure', 'Podane hasła są różne')
  }
}