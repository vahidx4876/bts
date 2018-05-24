import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ToolbarHelpers } from './toolbar.helpers';
import { AuthService } from '../../glogin/btslogin/auth.service';
import { PlayerService } from '../../modules/shared/services/player.service';
import { NotificationService } from '../../modules/shared/services/NotificationService';
import { Subscription } from 'rxjs/Subscription';
import { RealTimeService } from '../../modules/shared/services/RealTimeService';
import { Notification } from '../../modules/shared/services/ServicesModels';
import { json } from 'd3';
@Component({
  selector: 'cdk-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit , OnDestroy {
	
	
	notification:Notification;
	subscription: Subscription;
    @Input() sidenav;
	@Input() sidebar;
	@Input() drawer;
	@Input() matDrawerShow;
  
	searchOpen: boolean = false;
  toolbarHelpers = ToolbarHelpers;
     notify : Notification
  	constructor(private _authService : AuthService ,private _playerService : PlayerService , private messageService: NotificationService ,) { 
	
			this.subscription = this.messageService.getMessage().subscribe(message => {
			 this.notify =<Notification> message;
			var howl = _playerService.firePlayer(this.notify.alarmUrl,true,1.0);	 
			howl.play();
			// this.notification = message; 
			 this.toolbarHelpers.player.push(howl);
			 this.toolbarHelpers.notifications.push(message);
		 });

		
			
		}


  	ngOnInit() {


		}
		
					ngOnDestroy() {
					// unsubscribe to ensure no memory leaks
					 this.subscription.unsubscribe();
			}

}
