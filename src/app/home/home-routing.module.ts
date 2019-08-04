import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import { PlayerComponent } from './player/player.component';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',
      component:HomeComponent,
      children:[{
        path:'player',
        component:PlayerComponent
      },
    {
      path:'playerStats',
      component:PlayerstatisticsComponent
    },
    {
      path:'upcomingMatches',
      component:UpcomingMatchesComponent
    }
  ]
   
    }
    ])
  ],
  exports:[RouterModule],
  
})
export class HomeRoutingModule { }
