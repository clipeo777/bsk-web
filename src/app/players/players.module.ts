import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailComponent } from './player-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayerDetailComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PlayerDetailComponent]
})
export class PlayersModule {}
