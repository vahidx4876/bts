import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee, Issue, IDashCard } from './employee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { marker } from '../components/bts/login/models/bts/MapData';



@Injectable()
export class BTSDashService {

  private _dashcardurl: string = "../assets/data/daschcard.json";
  private _mappointurl: string = "../assets/data/mappoint.json";
  //private _url: string = " https://api.github.com/repos/angular/angular/issues";
 
  
  constructor(private http:HttpClient) { }

  getDaschcard(): Observable<IDashCard[]>{
    return this.http.get<IDashCard[]>(this._dashcardurl)
                    .catch(this.errorHandler);
  }

  getMapPoin(): Observable<marker[]>{
    return this.http.get<marker[]>(this._mappointurl)
                    .catch(this.errorHandler);
  }

  // getDaschcard(): Observable<IDashCard[]>{
  //   return this.http.get<IDashCard[]>(this._url)
  //                   .catch(this.errorHandler);
  // }


  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}



