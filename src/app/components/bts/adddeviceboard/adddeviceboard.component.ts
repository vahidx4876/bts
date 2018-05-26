import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { marker } from '../login/models/bts/MapData';
import { DataService } from '../../../services/data.service';
import { Issue } from '../../../models/issue';
import { PlayerService } from '../../../modules/shared/services/player.service';
import { AuthService } from '../../../glogin/btslogin/auth.service';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-adddeviceboard',
  templateUrl: './adddeviceboard.component.html',
  styleUrls: ['./adddeviceboard.component.scss']
})
export class AdddeviceboardComponent implements OnInit {


  

  user: string;
  isu: Issue;
  constructor( private _authService : AuthService){

    this.isu = new Issue();
    this.isu.btsID = "123ewq";
    this.isu.btsName = "Test";
    this.isu.latLoc = 323232;
    this.isu.longLoc = 544545454;
    this.isu.time = "12/345/3434";
  }

   latc: number = 35.715298;
   lngc : number = 51.404343;

  // just an interface for type safety.
  public markers = [
    {
      lat: 350.715298,
      lng: 501.404343,
      label: 'UNDEFINITION',
      draggable: false,

    }
  ]



 public mapData : Issue;


  latValue : number = 0 ;
  longValue : number = 0;
  btsId : string = "";
  btsName: string = "";


  ngOnInit() {


  }


  checkInfo(): boolean{
    if(this.btsId.length != 0 && this.btsName.length != 0){
return true;
    }
    return false;
  }
  onKeyLong(event: MatInput) { // without type info
    this.longValue =  event.value ;

    
    if(this.longValue as number)
    if(this.checkInfo()){
     this.latc = this.latValue /1;
     this.lngc = this.longValue/1;
           this.markers.splice(0,1);
      this.markers.push({
    
        lat: this.latValue /1,
        lng:  this.longValue/1,
        label: this.btsName,
        draggable: false,
      });
      this.onSave();
      //console.log(this.markers);
  
    }

  }
  OnCancel(){
   
 this.btsId = "";
 this.btsName = "";
 this.latValue = 0;
 this.longValue = 0;
 if(this.markers != null)
 this.markers.splice(0,1);

  }

  
  displayCounter(newCor : marker[]) {
    console.log("child Event",newCor[0]);
    this.longValue = this.mapData .longLoc = newCor[0].lng;
    this.latValue = this.mapData.latLoc  = newCor[0].lat;

}

  onSave(){
 
  let  pipe = new DatePipe('en-US'); // Use your own locale
  const now = Date.now();
let myFormattedDate = pipe.transform(now, 'long');
 let mapD = new Issue();
 mapD.btsID = this.btsId;
 mapD.btsName = this.btsName;
 mapD.latLoc = this.latValue;
 mapD.longLoc = this.longValue;
 mapD.time = myFormattedDate.toString();
 mapD.username = (this.user)? this.user : "No define";
this.mapData = mapD;


  }
  onKeyLat(event: MatInput) { // without type info
    this.latValue = event.value ;
    if(this.latValue as number)
    if(this.checkInfo()){
    
this.latc = this.latValue /1;
this.lngc = this.longValue/1,
      this.markers.splice(0,1);
      this.markers.push({
        lat: this.latValue /1,
        lng:  this.longValue/1,
        label: this.btsName,
        draggable: false,

      });

      this.onSave();
      console.log(this.markers);

    }
 
  }

  

}



class mapZoomData {

  latc : number;
  lngc : number;

  constructor() {
      
  }

}

class mapData {
  btsName: string;
  btsID: string;
  lat : number;
  lng : number;
  time : string;
  username : string;
  constructor() {
      
  }

}


