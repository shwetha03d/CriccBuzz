import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-upcoming-matches',
  templateUrl: './upcoming-matches.component.html',
  styleUrls: ['./upcoming-matches.component.css']
})
export class UpcomingMatchesComponent implements OnInit {
 // startDate = new Date(1990, 0, 1);
  constructor(private service:PlayerService) { }

  ngOnInit() {
    this.getUpcomingMatches();
  }

  rows=[];
  temp=[];
  getUpcomingMatches(){
    this.service.getUpcomingMatches().subscribe(resp=>{
      console.log(resp);
      let d:any=resp;
      this.rows=d.data;
      this.temp=d.data;

    },err=>{
      console.log(err);
    });

 }

 getUpcomingMatchesByDate(date){
   //alert(date);
  console.log(this.temp);
  console.log(new Date(date));
  let d:Date=new Date("8 August 2019");
  this.rows=this.temp.filter(obj=> new Date(obj.date).getDate()==d.getDate() && 
  new Date(obj.date).getMonth()==d.getMonth() 
   );


 }

  
}
