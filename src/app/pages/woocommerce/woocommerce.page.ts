import { Component, OnInit ,ViewChild } from '@angular/core';
import {ToastController} from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import {WoocommerceService} from  '../../services/woocommerce.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-woocommerce',
  templateUrl: './woocommerce.page.html',
  styleUrls: ['./woocommerce.page.scss'],
})
export class WoocommercePage implements OnInit {
// slide options
  sliderConfig = {
               initialSlide: 0,
               slidesPerView: 1,
               autoplay:true,
               speed:500,
             };

  products: any[];
  // moreProducts: any[];
  // page: number;
  // Wc:any;
  @ViewChild('scroll',{static :false}) infiniteScroll: IonInfiniteScroll;
  constructor(private woocommerce: WoocommerceService,private toast:ToastController,private router:Router) {}

  ngOnInit()
  {
     //set products
     this.products = this.woocommerce.getProducts();
  }

// load more products when the user scroll down
  loadMoreProducts(event)
  {
    // console.log(event);
    // fetch data with pagination and page size
    setTimeout(() => {
     // console.log('Done');
     // App logic to determine if all data is loaded
     // and disable the infinite scroll
      this.products = this.products.concat(this.products);
    // when the all products are fetched from database
    //  event.target.disabled = true;
      this.toast.create({
        message: " No more products !",
        color: 'primary',
        showCloseButton: true,
        duration: 3000,
        cssClass:'my-custom-class'
      }).then((toast) =>{
        event.target.complete();
        event.target.disabled = true;
        toast.present();
      });
   },600);
  }
  openProductPage (product)
  {
    this.woocommerce.setCurrentProduct(product);
    //this.router.navigateByUrl('woocommerce/product-details');
    // this.router.navigate(['woocommerce/product-details']);
  }
}
