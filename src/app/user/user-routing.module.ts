import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'user'},
  {path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }