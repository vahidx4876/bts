import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {

    email : "",
    password : ""
  }
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  goLogin(){
    this._router.navigate(['login/btslogin'])
  }

  registerUser() {
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/login/btslogin'])
      },
      err => console.log("localStorage ....."+err)
    )      
  }


}
