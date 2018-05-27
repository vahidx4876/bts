import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { PlayerService } from '../../modules/shared/services/player.service';
import { RealTimeService } from '../../modules/shared/services/RealTimeService';
import { BTSNotification } from '../../modules/shared/services/ServicesModels';
import { NotificationService } from '../../modules/shared/services/NotificationService';

@Component({
  selector: 'cdk-toolbar-notification',
  templateUrl: './toolbar-notification.component.html',
  styleUrls: ['./toolbar-notification.component.scss']
})
export class ToolbarNotificationComponent implements OnInit {
  map: Map<string, number>;
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
  	
  	constructor(private elementRef: ElementRef , private messageService : NotificationService) { }

  	ngOnInit() {
      this.map = new Map();
      
    }
    OnClick(){


      this.isOpen = !this.isOpen;
    }

  	select() {
      
    	
  	}



    chackStatus(btsN : string){

      var counter = 0;
      for (let i=0 ; i < this.notifications.length ; i++){

     if(btsN === this.notifications[i].btsName){
       ++counter;
       }

      }
      this.map.set(btsN,counter);
    }

    sendMessage(message : any): void {
      // send message to subscribers via observable subject
      this.messageService.sendAlarmMessage(message);
  }
  	delete(notification  ,index) {
      console.log("notif",notification,index);
      if( this.notifications != null){
        var player = <Howl>notification.player;
        if(player != null){
          player.stop();
          player.unload();

       var btsN =   notification.btsName;
       this.chackStatus(btsN);
        var btsCount = this.map.get(btsN);
      notification.btsCount = btsCount;
      this.sendMessage(notification);
        }
     
        this.notifications.splice(index, 1);
    
      
      }
    
  
     
  
      }
    
  	}


