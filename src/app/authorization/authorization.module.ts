import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { HomeModule } from '../home/home.module';
// import { HomeComponent } from '../home/home.component';


@NgModule({
  declarations: [RegisterComponent,LoginComponent],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    ReactiveFormsModule,
    HomeModule
   
  ],
  //providers:[AuthService]
})
export class AuthorizationModule { }
