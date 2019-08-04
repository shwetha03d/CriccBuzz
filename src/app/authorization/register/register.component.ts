import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private builder:FormBuilder,private auth_service:AuthService) { }

  registerForm=this.builder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    emailId:['',[Validators.required,Validators.minLength(4)]],
    contactNumber:['',[Validators.required,Validators.minLength(4)]],
    country:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(4)]]
  });

  

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.registerForm.value);
   this.auth_service.onSubmit(this.registerForm.value);
   this.router.navigate(['auth/login']);


  }

}
