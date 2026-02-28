import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [HomePageComponent]
})
export class HomePageModule {}
