
import { Component, OnInit , ViewChild , ElementRef , HostListener, Input } from '@angular/core';
import { AgmMap, AgmCoreModule, AgmInfoWindow, AgmMarker } from '@agm/core';
import { MapsAPILoader , MouseEvent } from '@agm/core';
import { Router } from '@angular/router';
import { marker } from '../../components/bts/login/models/bts/MapData';
@Component({
	selector: 'cdk-google-map',
	templateUrl: './google-map.component.html',
	styleUrls: ['./google-map.component.scss']
  })
  export class GoogleMapComponent implements OnInit {


  title: string = 'BTS project';

	lat: number = 35.715298;
	lng: number = 51.404343;
	zoom: number = 15;
  height: string = '1000px';
  xrouter :Router = null;

  @ViewChild('agminfo') aginfo : ElementRef;

  
 @Input() public markers: marker[]

	constructor(private mapsAPILoader: MapsAPILoader ,private router : Router) {

  this.xrouter = router;
	}

  ngOnInit() {

  }
  
  ngAfterViewInit() {

  }

  goHome() {
    this.router.navigate(['']);
  }
  goBtsDetail(lab : string , lat : number , lng : number) {

	this.router.navigate(['auth','mappin','pintab',{'NAVID':"DASH2D",'lab':lab ,'lat':lat ,'lng':lng}]).then(nav => {
	  console.log(nav+" pin 2 detail "); // true if navigation is successful
	}, err => {
	  console.log(err) // when there's an error
  });
  
  }
    clickedMarker(m: marker, index: number) {

	  this.goBtsDetail(m.label , m.lat , m.lng );
	  
    }
    
    mapClicked($event: MouseEvent) {
      this.lat = $event.coords.lat
	  this.lng = $event.coords.lng
	  
	
      // this.zoom =  this.zoom + 1;
      // this.markers.push({
      //   lat: $event.coords.lat,
      //   lng: $event.coords.lng,
      //   label : 'L'+$event.coords.lat+'long'+$event.coords.lng,
      //   draggable: true
      // });
    }

    onMouseOut(infoWindow:AgmInfoWindow , gm : marker){

 
      if (infoWindow != null) {
       infoWindow.close();
    }
  }
    onMouseOver(infoWindow:AgmInfoWindow , gm : marker) {
   


      if (infoWindow != null) {
        if (infoWindow.isOpen){
          infoWindow.close();
        }else {
          infoWindow.open();
        }
      
      }

    
  }
    
    markerDragEnd(m: marker, $event: MouseEvent) {
      console.log('dragEnd', m, $event);
    }


}




