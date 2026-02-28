import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './home-page/home-page.module';
import { FeesModule } from './fees/fees.module';
import { AttendanceModule } from './attendance/attendance.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PlayersModule } from './players/players.module';
import { PlayerViewModule } from './player-view/player-view.module';
import { PlayerCrudModule } from './player-crud/player-crud.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomePageModule,
    FeesModule,
    AttendanceModule,
    StatisticsModule,
    PlayersModule,
    PlayerViewModule,
    PlayerCrudModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
