import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PinTabService } from './PinTabService';
import { IGauge } from '../../../../dashboard-crm/employee';


@Component({
  selector: 'app-pintab',
  templateUrl: './pintab.component.html',
  styleUrls: ['./pintab.component.scss']
})
export class PintabComponent implements OnInit {

  errorMsg: string;
  public btsGaugeData = [];

  lng: string;
  lat: string;
  lab: string;
  data: any;

  constructor(private route: ActivatedRoute , private _pinTabService: PinTabService) { 

  // 'NAVID':"DASH2D"
  const Paramsmap = this.route.snapshot.paramMap;
  var id = Paramsmap.get("NAVID");
 
  if(id ==="DASH2D" )
  {
   this.lab = Paramsmap.get("lab");
   this.lat = Paramsmap.get("lat");
   this.lng = Paramsmap.get("lng");
  }
    
   }

  ngOnInit() {

  
    this._pinTabService.getGauge(this.lat,this.lng,this.lab)
   .subscribe(data => {this.btsGaugeData= data;
 console.log(data);
 console.log(this.gaugeData);
 },
              error => this.errorMsg = error);

  }


  public gaugeData = [
    {stroke: 12 ,title:"coil", current: 34 ,max:100,background: "#FFF968",color :"#B1A7FF",boxcolor:"#7986CB"},
    {stroke: 12 ,title:"Heat", current: 67 ,max:100,background: "#FFE268",color :"#A7C1FF",boxcolor:"#42A5F5"},
    {stroke: 12 ,title:"voltag", current:20 ,max:100,background: "#FFC368",color :"#A7F0FF",boxcolor:"#26A69A"},
    {stroke: 12 ,title:"Fan", current: 50 ,max:100,background: "#FFCF68",color :"#A7DEFF",boxcolor:"#26C6DA"}
  ] 

public btsData = [
  {colorDark: '#5C6BC0',colorLight: '#7986CB', status: 'on' ,icon:'public',message: 'Device Alive',isicon :'true'},
  {colorDark: '#42A5F5',colorLight: '#64B5F6', status: 'on' ,icon:'notifications',message: 'Alarm Status',isicon :'true'},
 {colorDark: '#5C6BC0',colorLight: '#7986CB', status: 'DisActived' ,icon:'pan_tool',message: 'Manual Alarm',istoggel:'true',checked : 'false',disabled :'false' , toggelcolor :'primary'},
] 
}


export interface modeldata{
 id : string;
 name :string;
}
