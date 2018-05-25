import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Notification } from './ServicesModels';

@Injectable()
export class NotificationService {

  constructor() { }

  private subject = new Subject<any>();

  private alarmSubject = new Subject<any>();

  sendMessage(message: Notification) {
      this.subject.next(message);
  }

  clearMessage() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

  // After Alaram  Raides 

setAlarmMessage(): Observable<any> {
    return this.alarmSubject.asObservable();
}

sendAlarmMessage(message: Notification) {
    this.alarmSubject.next(message);
}


}




// id: '123QWE';
// title: 'Ahwaz B1';
// lastTime: '23 Minutes ago';
// state: 'Door open';