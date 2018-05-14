import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ErrorComponent } from '../error/error.component';
import { UserComponent } from '../user/user.component';


const routes: Routes = [
  {path:'**',redirectTo:'/login/btslogin'},
  { path: 'btslogin', component: LoginComponent , data: { animation: 'btslogin' }},
 { path: 'btserror', component: ErrorComponent ,data: { animation: 'btserror' }},
 {path:'btsusers',component:UserComponent,data :{animation :'btsusers'}}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginrouterRoutingModule { }
