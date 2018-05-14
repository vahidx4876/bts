import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/tokenstorage.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, private authService: AuthService, private token: TokenStorageService) {
  }

  username: string;
  password: string;

  login(): void {
    this.authService.attemptAuth(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        this.router.navigate(['login','btsusers']).then(nav =>{

          console.log(nav ); // true if navigation is successful
        },err =>{console.log(err)});;

      }
    );
  }
ngOnInit(){

}
}
