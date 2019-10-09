import { Injectable } from '@angular/core';
//import * as WC from 'woocommerce-api';
@Injectable({
  providedIn: 'root'
})
export class WoocommerceService {
  // Woocommerce: any;
  currentProduct: any=  {
      img:'./assets/images/clothing.jpg',
      title :'Title',
      description :`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis risus purus, mattis vel ipsum in, viverra pellentesque diam.
      Suspendisse tempor non ipsum vel finibus. Aliquam blandit condimentum velit,
      `,
      price :'22 &#36;',
    };

// some dummy products
  products:any =
[
    {
      img:'./assets/images/clothing.jpg',
      title :'Title',
      description :`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis risus purus, mattis vel ipsum in, viverra pellentesque diam.
      Suspendisse tempor non ipsum vel finibus. Aliquam blandit condimentum velit,
      `,
      price :'22 &#36;',
    },
    {
      img:'./assets/images/clothing.jpg',
      title :'Title',
      description :`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis risus purus, mattis vel ipsum in, viverra pellentesque diam.
      Suspendisse tempor non ipsum vel finibus. Aliquam blandit condimentum velit,
      `,
      price :'22 &#36;',
    },
    {
      img:'./assets/images/clothing.jpg',
      title :'Title',
      description :`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis risus purus, mattis vel ipsum in, viverra pellentesque diam.
      Suspendisse tempor non ipsum vel finibus. Aliquam blandit condimentum velit,
      `,
      price :'22 &#36;',
    },
    {
      img:'./assets/images/clothing.jpg',
      title :'Title',
      description :`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Duis risus purus, mattis vel ipsum in, viverra pellentesque diam.
      Suspendisse tempor non ipsum vel finibus. Aliquam blandit condimentum velit,
      `,
      price :'22 &#36;',
    }
  ];

  constructor()
   {
     // this.Woocommerce = WC({
     //   url: "http://127.0.0.1",
     //   consumerKey: "ck_511df05f8f299008cd2cb9153f38201c05860659",
     //   consumerSecret: "cs_532b7ae32050e2f0c8c91300657222244c72a2fb"
     // });
   }

   getProducts()
   {
    //make a copy of products
    return [...this.products];
   }

   getCurrentProduct ()
   {
     return {...this.currentProduct};
   }

   setCurrentProduct(product)
   {
     this.currentProduct = {...product};
   }
}
