import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionElementComponent } from './collection-element/collection-element.component';
import { ServicePipe } from './pipes/service.pipe';



@NgModule({
  declarations: [CollectionElementComponent, ServicePipe],
  exports: [CollectionElementComponent, ServicePipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
