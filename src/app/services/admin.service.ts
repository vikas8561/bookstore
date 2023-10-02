import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminLogin, AdminSignUp } from '../dataType';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdminLoggedIn = new BehaviorSubject<boolean>(false);
 isAdminLoginError = new EventEmitter<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  // AdminSignUp is a type of data
  adminSignUp(data:AdminSignUp) {
    return this.http.post('https://localhost:7016/api/SignUp', data, {observe:'response'}).subscribe((result) => {
      console.log(result);
      
        if(result){
          // this.isAdminLoggedIn.next(true)
          localStorage.setItem('admin', JSON.stringify(result.body))
          this.router.navigate(['admin-home'])
        }
      
    })    
  }
  reloadAdmin(){
    if(localStorage.getItem('admin')){
      this.isAdminLoggedIn.next(true)
      this.router.navigate(['admin-home'])
    }
  }

  adminLogin(data:AdminLogin) {
    return this.http.post('https://localhost:7016/api/Login', data, {observe:'response'}).subscribe((result:any) => {
      console.log(result);
      
        if(result && result.body && result.body.length === 1){
          this.isAdminLoginError.emit(false)
          localStorage.setItem('admin', JSON.stringify(result.body))
          this.router.navigate(['admin-home'])
        }
        else{
          console.log("login failed");
          this.isAdminLoginError.emit(true)
          
        }
      
    })   
  }

}
