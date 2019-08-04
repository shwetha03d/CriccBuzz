import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http:HttpClient) { }


  getPlayerByName(name){
    return this.http.get("https://cricapi.com/api/playerFinder?apikey=IAPsxX8qx6h1Ig0gaZPAwJDFC0t2&name="+name);

  }

  getPlayerById(pid){
   return this.http.get("https://cricapi.com/api/playerStats?apikey=IAPsxX8qx6h1Ig0gaZPAwJDFC0t2&pid="+pid);

   

  }

  getUpcomingMatches(){
    return this.http.get("https://cricapi.com/api/matchCalendar?apikey=IAPsxX8qx6h1Ig0gaZPAwJDFC0t2");
  }

  
}
