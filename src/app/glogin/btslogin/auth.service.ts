import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    console.log("user"+user.username);
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    console.log("login: "+user);
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
		console.log("Logout");
		this._router.navigate(['/login/btslogin',{'id':"" ,'name':''}]).then(nav => {
      console.log(nav);
		}, err => {
		  console.log(err) // when there's an error
		});

  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
