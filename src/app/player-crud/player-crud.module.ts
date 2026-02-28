import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCrudComponent } from './player-crud.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PlayerCrudComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PlayerCrudComponent]
})
export class PlayerCrudModule {}
