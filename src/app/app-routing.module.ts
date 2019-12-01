import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './reservation/services/services.component';
import { WorkersComponent } from './reservation/workers/workers.component';
import { DateComponent } from './reservation/date/date.component';
import { FormComponent } from './reservation/form/form.component';


const routes: Routes = [
  // {path: 'services', component: ServicesComponent},
  // {path: 'employees', component: WorkersComponent},
  // {path: 'date', component: DateComponent},
  // {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
