import { Component, Input } from '@angular/core';

@Component({
  selector: 'pn-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.sass']
})

export class ProgressBarComponent {
  @Input() booking
}