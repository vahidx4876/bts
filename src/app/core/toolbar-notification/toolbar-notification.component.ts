import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { PlayerService } from '../../modules/shared/services/player.service';
import { RealTimeService } from '../../modules/shared/services/RealTimeService';
import { Notification } from '../../modules/shared/services/ServicesModels';
import { NotificationService } from '../../modules/shared/services/NotificationService';

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
  	
  	constructor(private elementRef: ElementRef , private _soundService : PlayerService  , private messageService : NotificationService) { }

  	ngOnInit() {

      
    }
    OnClick(){


      this.isOpen = !this.isOpen;
    }

  	select() {
      
    	
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
           this.sendMessage(notification);
        }
     
        this.notifications.splice(index, 1);
    
      
      }
    
  
     
  
      }
    
  	}


