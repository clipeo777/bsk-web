import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceComponent } from './attendance.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [AttendanceComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [AttendanceComponent]
})
export class AttendanceModule {}
