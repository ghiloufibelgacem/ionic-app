import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

	length:number;

  constructor(private notification:NotificationService) {

  	this.length = 0 ;
   }

  ngOnInit() 
  {
  	this.notification.getNotificationCount().subscribe((count)=>{
  		this.length = count;
  	});
  }

}
