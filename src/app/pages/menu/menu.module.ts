import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
    {
      path :'home',
      loadChildren: '../home/home.module#HomePageModule',

    },
    {
      path :'news',
      loadChildren: '../news/news.module#NewsPageModule',
    },
    {
      path :'woocommerce',
      loadChildren: '../woocommerce/woocommerce.module#WoocommercePageModule',
    },
    {
      path :'product-details',
      loadChildren:'../product-details/product-details.module#ProductDetailsPageModule',
    }
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
