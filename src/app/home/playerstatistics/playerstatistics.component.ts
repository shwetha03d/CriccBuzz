import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-playerstatistics',
  templateUrl: './playerstatistics.component.html',
  styleUrls: ['./playerstatistics.component.css']
})
export class PlayerstatisticsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private service:PlayerService) { }

  ngOnInit() {
  let id=sessionStorage.getItem("pid");
    console.log(id);
    this.onPlayerId(id);
    // let ob=this.activatedRoute.snapshot.queryParamMap.get("playerId");
    // console.log(ob);
    // this.onPlayerId(ob);
  }



  playerInfo;
  onPlayerId(pid){
    this.service.getPlayerById(pid).subscribe(resp=>{
     console.log(resp);
     this.playerInfo=resp;
     console.log(this.playerInfo);
    },
    err=>{
      console.log(err);
    })
  }



}
