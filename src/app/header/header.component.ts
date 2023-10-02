import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { BookService } from '../services/book.service';
import { book } from '../dataType'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string = 'default';
  adminName:string="";
  userName:string="";
  cartItems = 0
  searchResult:undefined|book[];
  http: any;
  constructor(private route:Router, private book:BookService) {}

  ngOnInit(): void {
    this.route.events.subscribe((val:any) => {
      if(val.url){
        if(localStorage.getItem('admin') && val.url.includes('admin')){
          let adminStore = localStorage.getItem('admin');
          let adminData = adminStore && JSON.parse(adminStore);
          this.adminName=adminData.name;
          this.menuType = 'admin'
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType='user';
        }
        else{
          this.menuType = 'default';
          
        }
      }
    });
    let cartData = localStorage.getItem('localCart');
    
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;
    }
    this.book.cartData.subscribe((items) =>{
      this.cartItems= items.length
    })
  }
  LogOut() {
    localStorage.removeItem('admin')
    this.route.navigate(['/'])
  }
  userLogout() {
    localStorage.removeItem('user')
    this.route.navigate(['/user'])
  }

   searchProduct(query:KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      this.book.searchProduct(element.value).subscribe((result)=>{
       
        if(result.length>5){
          result.length=length
        }
        this.searchResult=result;
      })
    }
  }

  // redirectToDetails(id:any){
  //   this.route.navigate(['/details/'+id])
  // }

  submitSearch(val:string){
    console.warn(val)
    //val == name
    //
    this.book.bookList().subscribe((data)=>{
      
      for(let i=0; i<data.length; i++){
        console.log(data[i]);
        if(val.trim() == data[i].name.trim()){
          this.route.navigate([`details/${data[i].id}`]);
          console.log("Details called");
          
        }else console.log("Wrong input search");
      }
      
    });
  }

}
