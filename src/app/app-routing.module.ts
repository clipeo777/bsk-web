import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FeesComponent } from './fees/fees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { PlayerDetailComponent } from './players/player-detail.component';
import { PlayerViewComponent } from './player-view/player-view.component';
import { PlayerCrudComponent } from './player-crud/player-crud.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'player-detail', component: PlayerDetailComponent },
  { path: 'player/:id', component: PlayerViewComponent },
  { path: 'player-crud', component: PlayerCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
