import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { LoginDetailsService } from '../login-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincustomer',
  templateUrl: './logincustomer.component.html',
  styleUrls: ['./logincustomer.component.css']
})

export class LogincustomerComponent implements OnInit {
  // Bad login message and flag
  incorrectUserDetailsMessage: string;
  isInvalidLogin: boolean;

  // User input storage object for ngModle
  customerLoginDetails: {
    customerEmail: string
    customerPassword: string
  };

  constructor(private loginSvc: LoginService, private loginDetails: LoginDetailsService, private router: Router) {
    // Defaults
    this.incorrectUserDetailsMessage = '';
    this.isInvalidLogin = false;
    this.customerLoginDetails = {
      customerEmail: '',
      customerPassword: ''
    };
  }

  ngOnInit() {
  }

  // Login with customer details form UI form
  loginCustomer() {
    console.log('Authenicating Customer');
    this.loginSvc.loginCustomer(this.customerLoginDetails)
      .subscribe(
        // If login success
        resp => {
          console.log(resp);
          // If login successful then save responce and nav to customer hone page
          console.log('Authenication Success');
          this.loginDetails.loginCustomer(resp);
          this.router.navigate(['/customerhome']);
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

