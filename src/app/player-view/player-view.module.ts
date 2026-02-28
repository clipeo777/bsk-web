import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerViewComponent } from './player-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayerViewComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PlayerViewComponent]
})
export class PlayerViewModule {}
