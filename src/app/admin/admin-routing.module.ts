import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BookingsManagementComponent } from './bookings-management/bookings-management.component';
import { WorkersManagementComponent } from './workers-management/workers-management.component';
import { ServicesManagementComponent } from './services-management/services-management.component';
import { WorkerDetailsComponent } from './workers-management/worker-details/worker-details.component';
import { ServiceDetailsComponent } from './services-management/service-details/service-details.component';
import { BookingDetailsComponent } from './bookings-management/booking-details/booking-details.component';


const routes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'bookings', component: BookingsManagementComponent},
  {path: 'bookings/:key', component: BookingDetailsComponent},
  {path: 'workers', component: WorkersManagementComponent},
  {path: 'workers/:key', component: WorkerDetailsComponent},
  {path: 'services', component: ServicesManagementComponent},
  {path: 'services/:key', component: ServiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
