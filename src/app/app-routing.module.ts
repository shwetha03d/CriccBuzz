import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
//import { LoginComponent } from './authorization/login/login.component';


@NgModule({
  imports: [RouterModule.forRoot([
    {path:'auth',
    loadChildren:'./authorization/authorization.module#AuthorizationModule',
},
{
  path:'home',
  loadChildren:'./home/home.module#HomeModule',
  canActivate:[AuthguardService]
  
},

  ])],
  exports: [RouterModule],
 // entryComponents:[LoginComponent]
})
export class AppRoutingModule { }
