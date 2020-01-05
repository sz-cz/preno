import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { ReservationComponent } from './reservation/reservation.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './core/components/registration/registration.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ReservationCanDeactivateGuard } from './core/guards/reservation-can-deactivate.guard';
import { UserComponent } from './user/user.component';
import { Page404Component } from './core/components/page404/page404.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', component: ReservationComponent, canDeactivate: [ReservationCanDeactivateGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    canActivate: [AuthGuard],
    component: AdminComponent},
  {path: 'user',
    // loadChildren: './user/user.module#UserModule',
    canActivate: [AuthGuard],
    component: UserComponent},
  {path: '**', component: Page404Component, data: { is404: true }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
