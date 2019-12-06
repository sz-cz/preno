import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [NavigationComponent, LoginComponent],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CoreModule { }
