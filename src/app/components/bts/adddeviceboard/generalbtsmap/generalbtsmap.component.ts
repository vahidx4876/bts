import { Component, OnInit , ViewChild , ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { AgmMap, AgmCoreModule, AgmInfoWindow, AgmMarker } from '@agm/core';
import { MapsAPILoader , MouseEvent } from '@agm/core';

@Component({
  selector: 'app-generalbtsmap',
  templateUrl: './generalbtsmap.component.html',
  styleUrls: ['./generalbtsmap.component.scss']
})
export class GeneralbtsmapComponent implements OnInit {

  @Input() lat: number = 35.715298;
  @Input() lng : number = 51.404343;
  @Input() public markers: marker[];
  newmarker: marker[];
  title: string = 'BTS project';
  @Output() valueChange = new EventEmitter<marker[]>();

  valueChanged() { // You can give any function name
   
    console.log('dragEnd',this.markers);
      this.valueChange.emit(this.markers);
    
  }

	// lat: number = 35.715298;
	// lng: number = 51.404343;
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
      
    //  console.log(`clicked the marker: ${m.label }`)
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

    


    dragEnded($event: MouseEvent){

    var lat =  $event.coords.lat;
     var lng =  $event.coords.lng;
     this.markers[0].lat = this.lat= lat;
     this.markers[0].lng = this.lng =lng;
    
      this.valueChanged();

    }
getm():string{
  return "bmarker.png";
}
  

}



// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
  draggable: boolean;
  latc: number;
  lngc : number;
}

