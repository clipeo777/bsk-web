import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './header/header.module';
import { HomePageModule } from './home-page/home-page.module';
import { FeesModule } from './fees/fees.module';
import { AttendanceModule } from './attendance/attendance.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PlayersModule } from './players/players.module';
import { PlayerViewModule } from './player-view/player-view.module';
import { PlayerCrudModule } from './player-crud/player-crud.module';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomePageModule,
    FeesModule,
    AttendanceModule,
    StatisticsModule,
    PlayersModule,
    PlayerViewModule,
    PlayerCrudModule,
    AppRoutingModule,
    DialogModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
