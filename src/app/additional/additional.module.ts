import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditionalComponent } from './additional.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdditionalComponent,
  ],
  exports: [
    AdditionalComponent,
  ]
})
export class AdditionalModule { }
