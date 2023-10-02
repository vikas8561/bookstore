import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { book, cart } from '../dataType';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  bookData:undefined | book
  bookQuantity:number=1;
  removeCart=false;
  constructor(private activeRoute:ActivatedRoute, private book:BookService ) {}

  ngOnInit(): void {
      let bookId = this.activeRoute.snapshot.paramMap.get('id');
      console.log(bookId);
      bookId && this.book.getBook(bookId).subscribe((result) => {
        this.bookData = result;
        let cartData= localStorage.getItem('localCart')
        if(bookId && cartData){
          let items = JSON.parse(cartData);
          items = items.filter((item:book) => bookId===item.id.toString());
          console.log("items", items);
          if(items.length){
            this.removeCart=true
          }else{
            this.removeCart=false
          }
          
          
        }
      })
      
  }

  handleQuantity(val:string) {
    if(this.bookQuantity<20 && val==='plus'){
      this,this.bookQuantity += 1;
    }
    else if(this.bookQuantity>1 && val==='min'){
      this.bookQuantity -= 1;
    }
  }

  addToCart(){
    // const cartData = JSON.parse(localStorage.getItem('localCart')) || [];

    
    if(this.bookData){
      this.bookData.quantity = this.bookQuantity;
      if(!localStorage.getItem('user')){
        this.book.localAddToCart(this.bookData)
        this.removeCart=true

      }
      else{
      console.log("user is logged in");
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      let cartData:cart = {
        ...this.bookData,
        productId:this.bookData.id,
        userId
      }
      delete cartData.id;
      this.book.addToCart(cartData).subscribe((result) =>{
        if(result){
          this.book.getCartList(userId);
          this.removeCart=true;
        }
        else{
          this.removeCart=false;
        }

        let user = localStorage.getItem('user');
        if(user){
          let userId = user && JSON.parse(user).id;
          this.book.getCartList(userId);

          // this.book.cartData.subscribe((result) =>{
          //   // let item = result.filter((item:book) =>productId?.toString() === item.id.toString({

          //   // })
          // })
        }
      })
    }
      
      
      
      
    }
    // const data = JSON.parse(window.localStorage.getItem('localCart')) || [];

    // data.push(this.bookData);
    
    // counter = data.length;

    // JSON.stringify(data);
  
    

  }
  removeToCart(bookId:any){
    // const data = JSON.parse(window.localStorage.getItem('localCart')) || [];

    this.book.removeItemFromCart(bookId)
    this.removeCart=false
  }
}
