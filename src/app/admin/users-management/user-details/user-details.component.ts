import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, UsersService, UiService } from './../../../core/services';
import { User } from './../../../shared/models/user.model';

@Component({
  selector: 'pn-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.sass', './../../admin.component.sass']
})
export class UserDetailsComponent implements OnInit {
  user : User;
  userKey : string;

  constructor(
    private usersService : UsersService, 
    private route : ActivatedRoute, 
    private authService : AuthService,
    private router : Router,
    private uiService : UiService) { }

  makeAdmin = () => this.authService.makeAdmin(this.user.email);

  deleteUser = () => this.authService.delete(this.user.email)
    .then(() => this.usersService.deleteUser(this.userKey))
    .then(() => this.router.navigate(['/admin/users']))
    .then(() => this.uiService.openToast('success', 'Użytkownik został usunięty'));

  ngOnInit() {
    this.userKey = this.route.snapshot.params['key'];
    this.usersService.getUser(this.route.snapshot.params['key']).subscribe((user : User) => this.user = user);
  }
}
