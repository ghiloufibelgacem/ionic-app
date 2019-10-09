import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WoocommercePage } from './woocommerce.page';

const routes: Routes = [
  {
    path: '',
    component: WoocommercePage,
    // children :
    // [
    //   {
    //     path:'product-details',
    //     loadChildren : '../product-details/product-details.module#ProductDetailsPageModule',
    //   }
    // ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WoocommercePage]
})
export class WoocommercePageModule {}
