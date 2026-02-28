import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDetailComponent } from './player-detail.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { HeaderModule } from '../header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [PlayerDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    DialogModule,
    ButtonModule,
    HeaderModule,
    HttpClientModule,
    TableModule
  ],
  exports: [PlayerDetailComponent]
})
export class PlayersModule {}
