import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification = [];
  pushTocken:string;
  subject:Subject<any>;
  length:Subject<number>;

  constructor()
  {
    this.subject = new Subject<any>();
    this.length = new Subject<number>();
  }

  getAllNotification():Subject<any>
  {
    return this.subject;
  }

  getNotificationCount():Subject<number> 
  {
    return this.length;
  }

  setNotification(notification)
  {
    this.notification.unshift(notification);
    this.subject.next(this.notification);
    this.length.next(this.notification.length);
  }

  setPushTocken(tocken:string)
  {
    this.pushTocken = tocken;
  }

  getPushTocken()
  {
    return this.pushTocken;
  }

  sendNotification()
  {
    this.subject.next(this.notification);
    this.length.next(this.notification.length);
  }
}
