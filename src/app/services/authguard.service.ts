import { Injectable } from '@angular/core';
import {CanActivate,Router} from '@angular/router';
import { LoginComponent } from '../authorization/login/login.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{

  constructor(private router:Router,private service:AuthService) { }


  canActivate(){
   console.log(this.service.Authenticated());
   if(this.service.Authenticated()){
     return true;
   }else{
     this.router.navigate(["auth/login"]);
    return false;
   }
  
}
}