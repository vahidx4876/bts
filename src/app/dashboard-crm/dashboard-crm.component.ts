import { Component, OnInit } from '@angular/core';
import { BTSDashService } from './employee.service';
import { marker } from '../components/bts/login/models/bts/MapData';
import { PlayerService } from '../modules/shared/services/player.service';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})
export class DashboardCrmComponent implements OnInit {

  fireAlarm: Howl;
    stroke  : string = "12";

 public btsData = [];
 public markers = [];

//  public markers: marker[] = [
//   {
//     lat: 35.715298,
//     lng: 51.404343,
//     label: 'Tehran',
//     draggable: true
//   },
//   {
//     lat: 51.373858,
//     lng: 7.215982,
//     label: 'B',
//     draggable: false
//   },
//   {
//     lat: 51.723858,
//     lng: 7.895982,
//     label: 'C',
//     draggable: true
//   }
// ]
   public errorMsg;

    // public btsData = [
    //     {colorDark: '#5C6BC0',colorLight: '#7986CB', number: 12, message: 'number of online Devices' , isdashboard : 'true'},
    //     {colorDark: '#42A5F5',colorLight: '#64B5F6', number: 4, message: 'number of offline devices' , isdashboard : 'true'},
    // ]

   


    constructor(private _employeeService:BTSDashService , private _fireBeep : PlayerService) { }

     ngOnInit() {
      //  if(this._fireBeep.fireSound){

      //    this._fireBeep.fireSound.play();
      //   }
      //  else {
      //   this._fireBeep.firePlayer('../assets/HouseFireAlarm.mp3',true,0.8);
      //   this._fireBeep.fireSound.play();
      //    this._fireBeep.WaterPlayer('../assets/waterAlaram.mp3',true,0.8);
      //    this._fireBeep.waterSound.play();
      // }

    // player.play();
   
    this._employeeService.getDaschcard()
      .subscribe(data => {this.btsData = data;
    console.log(data);
    },
                 error => this.errorMsg = error);

     this._employeeService.getMapPoin()
         .subscribe(data => {this.markers = data;
       console.log(data);
       },
          error => this.errorMsg = error);

                 
        
  }

}


