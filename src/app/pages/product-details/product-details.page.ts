import { Component, OnInit } from '@angular/core';
import {WoocommerceService} from '../../services/woocommerce.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  product:any;
  constructor(private woocommerce :WoocommerceService) { }

  ngOnInit()
  {
    this.product = this.woocommerce.getCurrentProduct();
  }
}
