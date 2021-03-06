import { Component, OnInit , ViewChild , ElementRef } from '@angular/core';
import { AgmMap, AgmCoreModule, AgmInfoWindow, AgmMarker } from '@agm/core';
import { MapsAPILoader , MouseEvent } from '@agm/core';

@Component({
  selector: 'app-generalbtsmap',
  templateUrl: './generalbtsmap.component.html',
  styleUrls: ['./generalbtsmap.component.scss']
})
export class GeneralbtsmapComponent implements OnInit {


  title: string = 'BTS project';

	lat: number = 35.715298;
	lng: number = 51.404343;
	zoom: number = 15;
  height: string = '1000px';

  @ViewChild('agminfo') aginfo : ElementRef;

	constructor(private mapsAPILoader: MapsAPILoader) {
  
	}

  ngOnInit() {

  }
  
  ngAfterViewInit() {

  }


  
    clickedMarker(m: marker, index: number) {
      
      console.log(`clicked the marker: ${m.label }`)
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

    markers: marker[] = [
      {
        lat: 35.715298,
        lng: 51.404343,
        label: 'Tehran',
        draggable: true
      },
      {
        lat: 51.373858,
        lng: 7.215982,
        label: 'B',
        draggable: false
      },
      {
        lat: 51.723858,
        lng: 7.895982,
        label: 'C',
        draggable: true
      }
    ]

}



// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}

