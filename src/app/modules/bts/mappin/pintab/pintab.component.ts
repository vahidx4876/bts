import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pintab',
  templateUrl: './pintab.component.html',
  styleUrls: ['./pintab.component.scss']
})
export class PintabComponent implements OnInit {

  data: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const Paramsmap = this.route.snapshot.paramMap;
   const routeParams = this.route.snapshot.params;
  var id = Paramsmap.get("id");
   var name = Paramsmap.get("name");
    console.log(id+"........"+name);
  }
  stroke  : string = "12";
  


public btsData = [
  {colorDark: '#5C6BC0',colorLight: '#7986CB', status: 'on' ,icon:'public',message: 'Device Alive',isicon :'true'},
  {colorDark: '#42A5F5',colorLight: '#64B5F6', status: 'on' ,icon:'notifications',message: 'Alarm Status',isicon :'true'},
 {colorDark: '#5C6BC0',colorLight: '#7986CB', status: 'DisActived' ,icon:'pan_tool',message: 'Manual Alarm',istoggel:'true',checked : 'false',disabled :'true' , toggelcolor :'primary'},
] 
}


export interface modeldata{
 id : string;
 name :string;
}
