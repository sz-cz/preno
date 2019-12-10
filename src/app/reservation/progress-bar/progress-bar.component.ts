import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pn-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})



export class ProgressBarComponent implements OnInit {

  @Input() booking

  constructor() { }



  ngOnInit() {
  }

}
// window.addEventListener("hashchange", () => window.scrollTo(window.scrollX, window.scrollY - 40));