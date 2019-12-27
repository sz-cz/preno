import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionElementComponent } from './components/collection-element/collection-element.component';
import { ServicePipe } from './pipes/service.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CollectionElementComponent, ServicePipe],
  exports: [CollectionElementComponent, ServicePipe],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
