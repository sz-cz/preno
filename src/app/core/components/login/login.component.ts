import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, UiService } from './../../services';

@Component({
  selector: 'pn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  constructor(
    private authService : AuthService, 
    private router : Router, 
    private uiService : UiService) { }

  logIn = loginForm => this.authService.login(loginForm.value.login, loginForm.value.password)
    .then(roles => {
      if (roles.admin == true || roles.worker) this.router.navigate(['/admin'])
      else this.router.navigate([''])
    })
    .catch(error => this.uiService.openToast('failure', error))
}
