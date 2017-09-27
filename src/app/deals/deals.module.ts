import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DealsComponent,
  ],
  exports: [
    DealsComponent,
  ]
})
export class DealsModule { }
