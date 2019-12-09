import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './core/registration/registration.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ReservationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'admin',
  loadChildren: './admin/admin.module#AdminModule',
  canActivate: [AuthGuard],
  component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
