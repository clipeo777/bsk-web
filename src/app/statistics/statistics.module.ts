import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [StatisticsComponent]
})
export class StatisticsModule {}
