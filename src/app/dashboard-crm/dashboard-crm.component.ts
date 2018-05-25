import { Component, OnInit, OnDestroy } from '@angular/core';
import { BTSDashService } from './employee.service';
import { marker } from '../components/bts/login/models/bts/MapData';
import { PlayerService } from '../modules/shared/services/player.service';
import { NotificationService } from '../modules/shared/services/NotificationService';
import { Subscription } from 'rxjs/Subscription';
import { Notification } from '../modules/shared/services/ServicesModels';
import { AgmMap, AgmCircle } from '@agm/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})
export class DashboardCrmComponent implements OnInit ,  OnDestroy  {

  _this: this;
  alarmCallbackSubscription: Subscription;
  calbackNotify: Notification;
  subscription: Subscription;
  notify: Notification;
  fireAlarm: Howl;
    stroke  : string = "12";

 public btsData = [];
 public markers = [];


   public errorMsg;

    // public btsData = [
    //     {colorDark: '#5C6BC0',colorLight: '#7986CB', number: 12, message: 'number of online Devices' , isdashboard : 'true'},
    //     {colorDark: '#42A5F5',colorLight: '#64B5F6', number: 4, message: 'number of offline devices' , isdashboard : 'true'},
    // ]

   


    constructor(private _employeeService:BTSDashService , private _playerService : PlayerService , private messageService: NotificationService) {





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

   setMarkers(markers : any , index : any) {

markers[index].iconUrl = "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_redA.png";

// Subscribe to begin publishing values

var _radius = 1000;
var rMin = _radius * 1 / 5;
var rMax = _radius;
var direction = 1;

var circleOption = {

  fillColor: markers[index].fillColor,
  fillOpacity: 0.9,

  radius: 1000,
  strokeColor: '#3878c7',
  strokeOpacity: 1,
  strokeWeight: 0.5
};

markers[index].fillOpacity = circleOption.fillOpacity;
markers[index].radius = circleOption.radius;
markers[index].strokeOpacity = circleOption.strokeOpacity;
markers[index].strokeColor = circleOption.strokeColor;
const secondsCounter = interval(15);

secondsCounter.subscribe( (n) =>{
  
      
  var radius = markers[index].radius;
        
  if ((radius > rMax) || (radius < rMin)) {
    direction *= -1;
  }
  var _par = (radius / _radius) - 0.1;

  circleOption.radius = radius + direction *9;
  circleOption.fillOpacity = 0.8 * _par;
  markers[index].radius =  circleOption.radius ;
  markers[index].fillOpacity = circleOption.fillOpacity;

}

);     

     }

     ngOnInit() {

      this.alarmCallbackSubscription = this.messageService.setAlarmMessage().subscribe(message => {


        if(message != null){
          this.calbackNotify = <Notification> message;
         var btsN =  this.calbackNotify.btsName ;
         for (var _i = 0; _i <this.markers.length; _i++) {
          var marker = this.markers[_i];
   
          if(marker.label === btsN){
            this.markers[_i].iconUrl = "https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_greenA.png";
          }
         }
        }
        

      });

 

        this.subscription = this.messageService.getMessage().subscribe(message => {

      
        this.notify =<Notification> message;


        for (var _i = 0; _i <this.markers.length; _i++) {
          var marker = this.markers[_i];
          var gIndex = _i;
        console.log(marker);
      
        var str1 = String(message.btsName);
        var str2 =String( marker.label );
        if(str1 === str2 ) {
       this.setMarkers(this.markers,_i);
      }
  
  
        }

      });
               
        
  }



  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
     this.alarmCallbackSubscription.unsubscribe();
}

}




