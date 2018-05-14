import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cdk-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
	isOpen: boolean = false;

  	//currentUser = null;
  	Hari;
  	

  	@Input() currentUser = null;
  	@HostListener('document:click', ['$event', '$event.target'])
  	onClick(event: MouseEvent, targetElement: HTMLElement) {
    	if (!targetElement) {
     		return;
    	}

    	const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    	if (!clickedInside) {
      		this.isOpen = false;
    	}
  	}
  	
    
  	constructor(private elementRef: ElementRef ,private  router : Router ) { }

	  logout(id:string , name: string) {
		this.router.navigate(['login','bts',{'id':id ,'name':name}]).then(nav => {
		  console.log(nav+"pin from dtaeail "); // true if navigation is successful
		}, err => {
		  console.log(err) // when there's an error
		});
	
		}


	//   app-login
  	ngOnInit() {
  	}

}
