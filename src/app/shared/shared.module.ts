import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionElementComponent } from './collection-element/collection-element.component';



@NgModule({
  declarations: [CollectionElementComponent],
  exports: [CollectionElementComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
