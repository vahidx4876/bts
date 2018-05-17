import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { marker } from '../login/models/bts/MapData';

@Component({
  selector: 'app-adddeviceboard',
  templateUrl: './adddeviceboard.component.html',
  styleUrls: ['./adddeviceboard.component.scss']
})
export class AdddeviceboardComponent implements OnInit {


  // just an interface for type safety.
  public markers: marker[] = [
    {
      lat: 350.715298,
      lng: 501.404343,
      label: 'xyzz',
      draggable: false
    }
  ]



 public mapData : mapData;


  latValue : number = 0 ;
  longValue : number = 0;
  btsId : string = "";
  btsName: string = "";
  constructor() { }

  ngOnInit() {


  }


  checkInfo(): boolean{
    if(this.btsId.length != 0 && this.btsName.length != 0){
return true;
    }
    return false;
  }
  onKeyLong(event: any) { // without type info
    this.longValue =  event.target.value ;
    
    if(this.longValue as number)
    if(this.checkInfo()){
      this.markers.splice(0,1);
      this.markers.push({
    
        lat: this.latValue /1,
        lng:  this.longValue/1,
        label: this.btsName,
        draggable: false
      });

      console.log(this.markers);
  
    }

  }
  OnCancel(){
   
 this.btsId = "";
 this.btsName = "";
 this.latValue = 0;
 this.longValue = 0;

  }

  onSave(){
  let  pipe = new DatePipe('en-US'); // Use your own locale
  const now = Date.now();
let myFormattedDate = pipe.transform(now, 'long');
 let mapD = new mapData();
 mapD.btsID = this.btsId;
 mapD.btsName = this.btsName;
 mapD.lat = this.latValue;
 mapD.lng = this.longValue;
 mapD.makeTime = myFormattedDate.toString();
this.mapData = mapD;
console.log(mapD);

  }
  onKeyLat(event: any) { // without type info
    this.latValue = event.target.value ;
    if(this.latValue as number)
    if(this.checkInfo()){
    

      this.markers.splice(0,1);
      this.markers.push({
        lat: this.latValue /1,
        lng:  this.longValue/1,
        label: this.btsName,
        draggable: false
      });

  
      console.log(this.markers);

    }
 
  }

  

}


class mapData {
  btsName: string;
  btsID: string;
  lat : number;
  lng : number;
  makeTime : string;
  constructor() {
      
  }

}


