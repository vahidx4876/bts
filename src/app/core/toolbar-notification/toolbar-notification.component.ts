import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { PlayerService } from '../../modules/shared/services/player.service';
import { RealTimeService } from '../../modules/shared/services/RealTimeService';

@Component({
  selector: 'cdk-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
	cssPrefix = 'toolbar-notification';
  	isOpen: boolean = false;
    @Input() notifications = [];
    @Input() player=[];

    // @HostListener('document:click', ['$event', '$event.target'])
    // onClick(event: MouseEvent, targetElement: HTMLElement) {
    //     if (!targetElement) {
    //           return;
    //     }
    //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    //     if (!clickedInside) {
    //          this.isOpen = false;
    //     }
    // }
  	
  	constructor(private elementRef: ElementRef , private _soundService : PlayerService ) { }

  	ngOnInit() {

      
    }
    OnClick(){


      this.isOpen = !this.isOpen;
    }

  	select() {
      
    	
  	}

  	delete(notification , song ,index) {
      console.log("notif",notification,index);
      if( this.notifications != null)
      this.notifications.splice(index, 1);
      if(song != null){
        var player = <Howl> song;
        console.log(song);
        console.log(player);
      }
    
  	}

}
