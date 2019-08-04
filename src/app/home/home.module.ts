import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeaderComponent } from '../common/header/header.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
import { PlayerComponent } from './player/player.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PlayerstatisticsComponent } from './playerstatistics/playerstatistics.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule,MatToolbarModule} from '@angular/material';
import { UpcomingMatchesComponent } from './upcoming-matches/upcoming-matches.component';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [HomeComponent,HeaderComponent,SidebarComponent, PlayerComponent, PlayerstatisticsComponent, UpcomingMatchesComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    HttpClientModule,
    MatDatepickerModule
   
    
  ],
    
  //entryComponents:[PlayerstatisticsComponent]

})
export class HomeModule { }
