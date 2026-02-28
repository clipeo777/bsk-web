import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeesComponent } from './fees.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [FeesComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [FeesComponent]
})
export class FeesModule {}
