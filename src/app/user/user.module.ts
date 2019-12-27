import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from './../shared/modules/material.module'

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ]
})
export class UserModule { }
