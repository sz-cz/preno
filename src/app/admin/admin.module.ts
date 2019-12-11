import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BookingsManagementComponent } from './bookings-management/bookings-management.component';
import { WorkersManagementComponent } from './workers-management/workers-management.component';
import { ServicesManagementComponent } from './services-management/services-management.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { WorkerDetailsComponent } from './workers-management/worker-details/worker-details.component';
import { ServiceDetailsComponent } from './services-management/service-details/service-details.component';
import { BookingDetailsComponent } from './bookings-management/booking-details/booking-details.component';
import { ServiceFormComponent } from './services-management/service-form/service-form.component';
import { WorkerFormComponent } from './workers-management/worker-form/worker-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [AdminComponent, BookingsManagementComponent, WorkersManagementComponent, ServicesManagementComponent, WorkerDetailsComponent, ServiceDetailsComponent, BookingDetailsComponent, ServiceFormComponent, WorkerFormComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    // BrowserAnimationsModule
  ]
})
export class AdminModule { }
