import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerCrudComponent } from './player-crud.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [PlayerCrudComponent],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [PlayerCrudComponent]
})
export class PlayerCrudModule {}
