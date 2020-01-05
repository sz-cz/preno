import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, UsersService, UiService, WorkersService } from './../../../core/services';
import { User, Worker } from './../../../shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'pn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass', './../../admin.component.sass']
})
export class UserDetailsComponent implements OnInit {
  user : User;
  userKey : string;
  workers$ : Observable<Worker[]>;

  constructor(
    private usersService : UsersService,
    private workersService : WorkersService,
    private route : ActivatedRoute, 
    private authService : AuthService,
    private router : Router,
    private uiService : UiService) { }

  makeAdmin = () => this.authService.makeAdmin(this.user.email)
    .then(() => this.uiService.openToast('success', 'Pomyślnie nadano uprawnienia użytkownikowi'));

  makeWorker = (key) => this.authService.makeWorker(this.user.email, key)
    .then(() => this.uiService.openToast('success', 'Pomyślnie nadano uprawnienia użytkownikowi'));

  deleteUser = () => this.authService.delete(this.user.email)
    .then(() => this.usersService.deleteUser(this.userKey))
    .then(() => this.router.navigate(['/admin/users']))
    .then(() => this.uiService.openToast('success', 'Użytkownik został usunięty'));

  ngOnInit() {
    this.userKey = this.route.snapshot.params['key'];
    this.usersService.getUser(this.route.snapshot.params['key']).subscribe((user : User) => this.user = user);
    this.workers$ = this.workersService.getWorkers()
  }
}
