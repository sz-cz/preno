import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingsManagementComponent } from './bookings-management/bookings-management.component';
import { WorkersManagementComponent } from './workers-management/workers-management.component';
import { ServicesManagementComponent } from './services-management/services-management.component';
import { WorkerDetailsComponent } from './workers-management/worker-details/worker-details.component';
import { ServiceDetailsComponent } from './services-management/service-details/service-details.component';
import { BookingDetailsComponent } from './bookings-management/booking-details/booking-details.component';
import { ServiceFormComponent } from './services-management/service-form/service-form.component';
import { WorkerFormComponent } from './workers-management/worker-form/worker-form.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { UserDetailsComponent } from './users-management/user-details/user-details.component';
import { ServiceEditionComponent } from './services-management/service-edition/service-edition.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'bookings'},
  {path: 'users', component: UsersManagementComponent},
  {path: 'users/:key', component: UserDetailsComponent},
  {path: 'bookings', component: BookingsManagementComponent},
  {path: 'bookings/:key', component: BookingDetailsComponent},
  {path: 'workers', component: WorkersManagementComponent},
  {path: 'workers/add', component: WorkerFormComponent},
  {path: 'workers/:key', component: WorkerDetailsComponent},
  {path: 'services', component: ServicesManagementComponent},
  {path: 'services/add', component: ServiceFormComponent},
  {path: 'services/:key', component: ServiceDetailsComponent},
  {path: 'services/:key/edit', component: ServiceEditionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
