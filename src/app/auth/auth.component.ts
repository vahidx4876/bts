import { Component, OnInit ,Input} from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { RealTimeService } from '../modules/shared/services/RealTimeService';




@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']

})

export class AuthComponent implements OnInit{
  @Input() isVisible : boolean = true;
  visibility = 'shown';

  sideNavOpened: boolean = true;
  matDrawerOpened: boolean = false;
  matDrawerShow: boolean = true;
  sideNavMode: string = 'side';
  count: boolean = true;

  ngOnChanges() {
   this.visibility = this.isVisible ? 'shown' : 'hidden';
  }

	constructor(private media: ObservableMedia , private _realTimeService : RealTimeService) {
        
        this._realTimeService.BrodaCast();
         // var host = 
         this._realTimeService.mqttLauncher('wss://btsmanager.net:8885','amin','1234');
      this._realTimeService.mattSubscriber('test'); 
     //    this._realTimeService.mqttPublisher('test','hello to you');
        

    }

	ngOnInit() {


		this.media.subscribe((mediaChange: MediaChange) => {
            this.toggleView();
        });

        //For big vision
        this.sideNavMode = 'side';
        this.sideNavOpened = false;
        this.matDrawerOpened = true;
        this.matDrawerShow = true;
	}
    getRouteAnimation(outlet) {

       return outlet.activatedRouteData.animation;
       //return outlet.isActivated ? outlet.activatedRoute : ''
    }

	toggleView() {
		if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        } else if(this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        } else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
	}


}
