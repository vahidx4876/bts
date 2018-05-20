import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../glogin/btslogin/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Router } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CommonModule,
    
  ],
  exports:[CommonModule],
  declarations: []

})
export class ServicesModule {
  

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [ AuthService ]
    };
  }

}
