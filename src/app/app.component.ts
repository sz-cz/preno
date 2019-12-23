import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'preno';
  is404 = false

  constructor(private router : Router, private route : ActivatedRoute) {  }

  showNavbar = () => {
    if (
      this.router.url == '/login' ||
      this.router.url == '/register' ||
      this.is404 == true) return false
    else return true
  }
  ngOnInit() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(event => {
        this.route.firstChild.data.subscribe(value => {
          value.is404 ? this.is404 = value.is404 : this.is404 = false}
          )
      });
  }
}
