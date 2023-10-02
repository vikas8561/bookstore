import { Component, OnInit } from '@angular/core';
import { AdminLogin, AdminSignUp, book, cart } from '../dataType';
import { UserService } from '../services/user.service';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  showLogin:boolean=true
  loginError:string="";
  constructor(private user : UserService, private book:BookService) {}

  ngOnInit():void {
    this.user.userAuthReload();
  }

  signUp(data:AdminSignUp){
    this.user.userSignUp(data)
    
  }
  login(data:AdminLogin){
    this.user.userLogin(data);
    this.user.invalidUser.subscribe((result) =>{
      console.log(result);
      if(result){
        this.loginError="Email or Password Invalid"
      }{
        this.localCartToDb();
      }
    })
    
  }
  openLogin(){
    this.showLogin=true;
  }
  openSignUp(){
    this.showLogin=false;
  }

  localCartToDb(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    let userId = user && JSON.parse('user').id;
    if(data){
      let cartDataList:book[] = JSON.parse(data);
      
      cartDataList.forEach((book:book, index) =>{
        let cartData:cart={
          ...book,
          productId:book.id,
          userId
        }
        delete cartData.id;
          this.book.addToCart(cartData).subscribe((result) =>{
            if(result){
              console.log("data is stored in DB");
              
            }
          })
    
        
        if(cartDataList.length === index+1){
          localStorage.removeItem('localCart')
        }
      })
    }
    this.book.getCartList(userId)
    
  }
}
