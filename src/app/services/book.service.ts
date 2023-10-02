import { EventEmitter, Injectable } from '@angular/core';
import { book, cart } from '../dataType';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  removeToCart(id: any) {
    throw new Error('Method not implemented.');
  }
  cartData = new EventEmitter<book[] | []>()

  constructor(private http:HttpClient) { }
  addBook(data:book) {
    return this.http.post('https://localhost:7016/api/Book', data);
    
  }

  bookList() {
    
    return this.http.get<book[]>('https://localhost:7016/api/Book');
  }
  
  deleteBook(id:any) {
    return this.http.delete(`https://localhost:7016/api/Book/${id}`);
  }

  getBook(id:any){
    return this.http.get<book>(`https://localhost:7016/api/Book/${id}`);
  }

  updateBook(book:book){
    return this.http.put<book>(`https://localhost:7016/api/Book/${book.id}`, book);
  }

  trendyBooks() {
    return this.http.get<book[]>('https://localhost:7016/api/Book');
  }

  searchProduct(query:string){
    return this.http.get<book[]>(`https://localhost:7016/api/Book?q=${query}`);
  }

  localAddToCart(data:book){
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
    }else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
      this.cartData.emit(cartData);
    }
  }

  removeItemFromCart(bookId:number) {
    let cartData= localStorage.getItem('localCart');
    if(cartData){
      let items:book[] = JSON.parse(cartData);
      items = items.filter((item:book)=>bookId!==item.id)
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
  }
  }
  addToCart(cartData:cart){
    return this.http.post('https://localhost:7016/api/Cart', cartData);
  }

  getCartList(userId:any){
    return this.http.get<book[]>('https://localhost:7016/api/Book?userId='+ userId, {
      observe:'response'
    }).subscribe((result) =>{
      if(result && result.body){
        this.cartData.emit(result.body);
      }
    });
  }
  // currentCart() {
  //   let userStore = localStorage.getItem('user');
  //   let userData = userStore && JSON.parse(userStore);
  //   return this.http.get<cart[]>('https://localhost:7016/api/Book?userId='+ userData.id);
  // }
  
}

