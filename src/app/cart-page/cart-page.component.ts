import { Component, OnInit } from '@angular/core';
import { Router, withDebugTracing } from '@angular/router';
 import { BookService } from '../services/book.service';
 import { book, cart } from '../dataType';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
   bookList:undefined | book[];
   cartData:cart[] | undefined
cart: any;
  constructor(private product: BookService, private router:Router){}
   
  ngOnInit(): void {
    //this.loadDetails()
      // this.book.currentCart().subscribe((result) => {

      // })
  }
  // removeToCart(id:any){
  //   id && this.cartData && this.product.removeToCart(id).subscribe((result)=>{
  //     this.loadDetails();
  //   })
  // }

//   loadDetails(){
//     this.product.currentCart().subscribe((result) => {
//       this.cartData = result;
//       console.warn(this.cartData);
//       let price = 0;
//       result.forEach((item) => {
//         if (item.quantity) {
//           price = price + (+item.price * +item.quantity)
//         }
//       })

//     if(!this.cartData.length){
//       this.router.navigate(['/'])
//     }

//     })
//   }

//   checkout() {
//     this.router.navigate(['/checkout'])
//   }
 }
