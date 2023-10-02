import { EventEmitter, Injectable } from '@angular/core';
import { AdminLogin, AdminSignUp } from '../dataType';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUser= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(user:AdminSignUp){
    this.http.post('https://localhost:7016/api/SignUp', user, {observe:'response'})
    .subscribe((result) =>{
      console.log(result);
      if(result){
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    })
    
  }
  userAuthReload() {
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }

  userLogin(data:AdminLogin) {
    this.http.get<AdminSignUp[]>(`https://localhost:7016/api/SignUp?email=${data.email}&password=${data.password}`, 
    {observe:'response'}
    ).subscribe((result) =>{
      if(result && result.body?.length){
        localStorage.setItem('user', JSON.stringify(result.body[1]));
        this.router.navigate(['/']);
        this.invalidUser.emit(true)
      }else{
        this.invalidUser.emit(true)
      }
    })
  }
}
