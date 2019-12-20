import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pn-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.sass']
})
export class Page404Component implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate([''])
    }, 5000)
  }

}
