import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../../../../glogin/btslogin/auth.service';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  
  }



  
  goRegistern(id:string , name: string) {
    this._router.navigate(['/login/btsregister']).then(nav => {
      console.log(nav+ "go to register"); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

    }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(    
      res => {
        console.log(res.token);
        localStorage.setItem('token', res.token)
        this._auth.username = "King Stone";
        this._router.navigate(['/auth/dashboard'])
      },
      err => console.log(err)
    ) 
  }

}
