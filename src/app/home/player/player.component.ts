import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { PlayerstatisticsComponent } from '../playerstatistics/playerstatistics.component';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private builder:FormBuilder,private service:PlayerService,private router:Router,private dialog:MatDialog,
    private dialogRef:MatDialog) { }

  player=this.builder.group({
    name:['',Validators.required]
    
  })

  // players;

  ngOnInit() {
  }

  rows:[];
  onSearch(name){
  
   this.service.getPlayerByName(name).subscribe(resp=>{
    let d:any=resp;
    console.log(d);
    this.rows=d.data;
    //  console.log(resp);
   },
   err=>{
     console.log(err);
   } )


  }
playerInfo;
  getPlayerDetails(id){
    // const dialogRef=this.dialog.open(PlayerstatisticsComponent);
    // dialogRef.afterClosed().subscribe(result=>{
    //   console.log('dialog result:${result}');
    // });

    console.log('invoked by id'+id);

    this.router.navigate(['/home/playerStats'],{queryParams:{"playerId":id}})
  }

  
  // openModel(playerId) {
  //   console.log('invoked openModel');
  //   sessionStorage.setItem("playerId",playerId);
  //   console.log(playerId);
  //   this.dialog.open(PlayerstatisticsComponent); 
      
  // }

  openDialog(id) {
    sessionStorage.setItem('pid',id);
    const dialogRef = this.dialog.open(PlayerstatisticsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }



}


