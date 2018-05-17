
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { IDashCard, IGauge, IBTSCard } from '../../../../dashboard-crm/employee';





@Injectable()
export class PinTabService {

  private _gaugeurl: string = "../../../../../assets/data/btsgauge.json";
  private _btscardurl: string = "../../../../../assets/data/btscard.json";

 
  constructor(private http:HttpClient) { }

  
  getGauge(lat:string , lng : string , lab : string): Observable<IGauge[]>{
    return this.http.get<IGauge[]>(this._gaugeurl)
                    .catch(this.errorHandler);
  }

  getBTSCard(lat:string , lng : string , lab : string): Observable<IBTSCard[]>{
    return this.http.get<IBTSCard[]>(this._btscardurl)
                    .catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}