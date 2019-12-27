import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { Page404Component } from './components/page404/page404.component';
import { MaterialModule } from './../shared/modules/material.module';


@NgModule({
  declarations: [NavigationComponent, LoginComponent, RegistrationComponent, Page404Component],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ]
})
export class CoreModule { }
