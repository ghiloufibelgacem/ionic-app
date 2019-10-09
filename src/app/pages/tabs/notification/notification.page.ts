import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../../services/notification.service';
import{ToastController} from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  searchKey = '';
  notifications = [];
  // for search
  serachNotification =[];
  constructor(private notification:NotificationService,private toast:ToastController) {

  }

  ngOnInit()
  {
    this.notification.getAllNotification().subscribe((notifications)=>{
      this.notifications = notifications;
    });
    this.serachNotification = [...this.notifications];
    this.notification.sendNotification();
  }

  search (event)
  {
    this.notifications = this.serachNotification.filter((item)=>{ return item.title.includes(this.searchKey);});
    if(this.notifications.length == 0)
    {
      this.toast.create({
          message: 'notifications with this title does not exist',
          color :'primary',
          showCloseButton: true,
          duration: 3000,
          position : 'bottom',
        }).then((toast)=>
        {
          this.notifications = this.serachNotification;
          toast.present();
        });
    }
  }
}
