import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  

})
export class AppComponent {
  title = 'app';
  mohammad:string;
  constructor(){
    this.mohammad = "kadivar";
  }
  getRouteAnimation(outlet) {
      
      return outlet.activatedRouteData.animation
  }
}
