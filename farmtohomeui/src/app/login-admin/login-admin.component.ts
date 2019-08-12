import { Component, OnInit } from '@angular/core';
import { LoginService } from "../login.service";
import { LoginDetailsService } from "../login-details.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  incorrectUserDetailsMessage: string;
  isInvalidLogin: boolean;

  // User input storage object for ngModle
  adminLoginDetails: {
    adminUsername: string
    adminPassword: string
  };

  constructor(private loginSvc: LoginService, private loginDetails: LoginDetailsService, private router: Router) {
    // Defaults
    this.incorrectUserDetailsMessage = '';
    this.isInvalidLogin = false;
    this.adminLoginDetails = {
      adminUsername: '',
      adminPassword: ''
    };
  }

  ngOnInit() {
  }

  // Login with customer details form UI form

  loginAdmin() {
    console.log('Authenicating Admin');
    this.loginSvc.loginAdmin(this.adminLoginDetails)
      .subscribe(
        // If login success
        resp => {
          console.log(resp);
          // If login successful then save responce and nav to farmer hone page
          console.log('Authenication Success');
          this.loginDetails.loginAdmin(resp);
          this.router.navigate(['/adminhome']);
        },
        // If login failure
        errorResp => {
          // If login unsuccessful display the login failure message
          console.log(errorResp);
          console.log('Authenication failure');
          this.incorrectUserDetailsMessage = 'invalid user credentials';
          this.isInvalidLogin = true;
        }
      );
  }
}
