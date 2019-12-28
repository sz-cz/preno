import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionElementComponent } from './components/collection-element/collection-element.component';
import { ServicePipe } from './pipes/service.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DeactivateModalComponent } from './components/deactivate-modal/deactivate-modal.component';
import { MaterialModule } from './modules/material.module';

@NgModule({
  declarations: [CollectionElementComponent, ServicePipe, DeactivateModalComponent],
  entryComponents: [DeactivateModalComponent],
  exports: [CollectionElementComponent, ServicePipe],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MaterialModule
  ]
})
export class SharedModule { }
