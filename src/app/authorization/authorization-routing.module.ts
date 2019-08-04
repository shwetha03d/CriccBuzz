import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'; 
import { HomeComponent } from "../home/home.component";

// const routes:Routes=[
//   {path:'login',component:LoginComponent},
//   {path:'register',component:RegisterComponent}
// ];

@NgModule({
  declarations: [],
  
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path:'login',
          component:LoginComponent
        },
        {
          path:'register',
          component:RegisterComponent
        },{
          path:'home',
          component:HomeComponent
        }
  
  ])
  ],

  exports:[RouterModule]
})
export class AuthorizationRoutingModule { }
