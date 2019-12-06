import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ReservationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin',
  loadChildren: './admin/admin.module#AdminModule',
  component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
