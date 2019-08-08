import { Injectable } from '@angular/core';
import { LoginTypes } from './login-types.enum';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailsService {

  // Flag for is loged in
  isLogedIn: boolean;

  // Loged in user type and details
  userType: LoginTypes;
  userDetails: any;

  constructor() {
    // Defaults
    this.isLogedIn = false;
    this.userType = null;
    this.userDetails = {};
  }

  // user getter and setter
  loginFarmer(details) {
    this.userType = LoginTypes.FARMER;
    this.userDetails = details;
  }

  loginCustomer(details: Customer) {
    this.userType = LoginTypes.CUSTOMER;
    this.userDetails = details;
  }

  // Check loggedin user is a customer
  isCustomer() {
    return this.userType === LoginTypes.CUSTOMER;
  }

  // Check loggedin user is a customer
  isFarmer() {
    return this.userType === LoginTypes.FARMER;
  }
}
