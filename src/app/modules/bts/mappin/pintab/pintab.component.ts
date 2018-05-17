import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { PinTabService } from './PinTabService';
import { IGauge, IBTSCard } from '../../../../dashboard-crm/employee';


@Component({
  selector: 'app-pintab',
  templateUrl: './pintab.component.html',
  styleUrls: ['./pintab.component.scss']
})
export class PintabComponent implements OnInit {

  public btsCardData: IBTSCard[];
  errorMsg: string;
  public btsGaugeData :IGauge[];

  lng: string;
  lat: string;
  lab: string;
  data: any;

  constructor(private route: ActivatedRoute , private _pinTabService: PinTabService) {  }

  ngOnInit() {

    // 'NAVID':"DASH2D"
    const Paramsmap = this.route.snapshot.paramMap;
   var id = Paramsmap.get("NAVID");
  
   if(id ==="DASH2D" )
   {
    this.lab = Paramsmap.get("lab");
    this.lat = Paramsmap.get("lat");
    this.lng = Paramsmap.get("lng");

    this._pinTabService.getGauge(this.lat,this.lng,this.lab)
   .subscribe(data => {this.btsGaugeData = data;
 console.log(data);
 },
              error => this.errorMsg = error);


              this._pinTabService.getBTSCard(this.lat,this.lng,this.lab)
              .subscribe(data => {this.btsCardData = data;
            console.log(data);
            },
                         error => this.errorMsg = error);


    
   }


  }


}


export interface modeldata{
 id : string;
 name :string;
}
