import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private builder:FormBuilder,private service:AuthService
    ) { }

  loginForms=this.builder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForms.value);
  //   let userData:any=JSON.parse(sessionStorage.getItem("userData"));
  //   if(userData.emailId===this.loginForms.value.email && userData.password===this.loginForms.value.password){
  //  this.loggedIn=true;
  //     this.router.navigate(['/home']);
  //   console.log('Authenticated');

  //   }
  //   else{
  //     this.loggedIn=false;
  //     this.router.navigate(['/auth/login']);

  //   }
    
  var loggedIn=this.service.validatingUser(this.loginForms);
  if(loggedIn)
{
  
  this.router.navigate(['/home']);

}  
else{
  this.router.navigate(['auth/register']);
}
}
}