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
import { UsersManagementComponent } from './users-management/users-management.component';
import { UserDetailsComponent } from './users-management/user-details/user-details.component';
import { MaterialModule } from './../shared/modules/material.module';

@NgModule({
  declarations: [AdminComponent, BookingsManagementComponent, WorkersManagementComponent, ServicesManagementComponent, WorkerDetailsComponent, ServiceDetailsComponent, BookingDetailsComponent, ServiceFormComponent, WorkerFormComponent, UsersManagementComponent, UserDetailsComponent],
  exports: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
