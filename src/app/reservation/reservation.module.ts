import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationComponent } from './reservation.component';
import { ServicesComponent } from './services/services.component';
import { WorkersComponent } from './workers/workers.component';
import { DateComponent } from './date/date.component';
import { FormComponent } from './form/form.component';
import { SummaryComponent } from './summary/summary.component';
import { SharedModule } from '../shared/shared.module';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RouterModule } from '@angular/router';
import { DayPickerComponent } from './date/day-picker/day-picker.component';
import { HourPickerComponent } from './date/hour-picker/hour-picker.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ReservationComponent, ServicesComponent, WorkersComponent, DateComponent, FormComponent, SummaryComponent, ProgressBarComponent, DayPickerComponent, HourPickerComponent],
  exports: [ReservationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatSnackBarModule
  ]
})
export class ReservationModule { }
