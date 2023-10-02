import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { AdminLogin, AdminSignUp } from '../dataType';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showLogin = false
  adminError:string = '';
  constructor(private admin:AdminService) {}

  ngOnInit(): void {
    this.admin.reloadAdmin()
  }
  // AdminSignUp is a type of data
  AdminSignUp(data:AdminSignUp):void {
    console.log(data);
    this.admin.adminSignUp(data)  
  }
  AdminLogin(data:AdminLogin):void {
    this.admin.adminLogin(data)
    this.admin.isAdminLoginError.subscribe((isError) => {
      if(isError)
      this.adminError="Email or password is not correct";
      })
  }
  GoToLogin() {
    this.showLogin = true
  }
  GoToSignUp() {
    this.showLogin = false
  }
}
