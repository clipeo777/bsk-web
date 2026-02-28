import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerViewComponent } from './player-view.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [PlayerViewComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [PlayerViewComponent]
})
export class PlayerViewModule {}
