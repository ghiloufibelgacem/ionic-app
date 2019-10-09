import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children :[
      {
        path:'notification',
        loadChildren: '../tabs/notification/notification.module#NotificationPageModule'
      },
      {
        path:'map',
        loadChildren : '../tabs/map/map.module#MapPageModule',
      },
      {
        path :'contact',
        loadChildren : '../tabs/contact/contact.module#ContactPageModule',
      }
    ]
  },
  {
    path : '',
    redirectTo : 'tabs/notification',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
