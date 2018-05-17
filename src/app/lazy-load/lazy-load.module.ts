import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
 
import { AuthModule } from '../auth/auth.module';
import { AuthGuard } from '../glogin/btslogin/auth.guard';

const routes: Routes = [   
   {path: 'auth',loadChildren: '../auth/auth.module#AuthModule'},
    // {path: 'login', loadChildren: '../glogin/glogin/glogin-routing.module#GloginRoutingModule'},
  //  {path: 'register', loadChildren: '../register/register.module#RegisterModule'},
    // {path: 'login', loadChildren: '../pages/login/login.module#LoginModule'},
    {path:'login',loadChildren:'../components/bts/login/loginrouter/loginrouter.module#LoginrouterModule'},
    {path: '**', redirectTo: 'auth/dashboard'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  
})
export class LazyLoadModule { }
