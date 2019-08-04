import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {} 

  

   onSubmit(userData){
     sessionStorage.setItem("userData",JSON.stringify(userData));
     
    
    //this.http.post("http://x-workz.mj.milesweb.cloud/v1/save",userData);
   }

  
  validatingUser(loginUser){
    debugger;
    console.log(loginUser);
    var userData=sessionStorage.getItem('userData');
    let data=JSON.parse(userData);
    if(data.emailId===loginUser.value.email && data.password===loginUser.value.password){
      console.log('authenticated');
      this.isAuthenticated=true;
      console.log(this.isAuthenticated);
      return true;
    }
    this.isAuthenticated=false;
    return false;
    
  }
  
  isAuthenticated=false;
   Authenticated()
   {
     console.log('authenticated invoked in auth service');
     return this.isAuthenticated;
   }
   
}
