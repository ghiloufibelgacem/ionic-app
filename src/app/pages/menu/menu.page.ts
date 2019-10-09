import { Component, OnInit } from '@angular/core';
import {Router,RouterEvent} from '@angular/router';
import{AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  // menu list
  pages = [
    {
      title : 'Home',
      url:'/menu/home',
      icon:'home'
    },
    {
      title :'News',
      url :'/menu/news',
      icon:'desktop'
    },
    {
      title:'Woocommerce',
      url:'/menu/woocommerce',
      icon:'cart'
    }
  ];

  selectedPath ='';
  constructor(private router: Router ,private auth:AuthService) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}

  logout ()
  {
      this.auth.logout();
  }


}
