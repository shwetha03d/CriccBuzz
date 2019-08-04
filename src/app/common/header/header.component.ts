import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:AuthService,private router:Router) { }

  ngOnInit() {
  }

  onLogOut(){
    console.log('invoked on logout');
    sessionStorage.removeItem('userData');
    this.service.isAuthenticated=false;
    return this.router.navigate(['auth/register']);

  }
}
