import { Injectable } from '@angular/core';
import { Admin } from './admin';
import { Customer } from './customer';
import { Farmer } from './farmer';
import { LoginTypes } from './login-types.enum';
import { BasketService } from "./basket.service";

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
    this.logout();
  }

  // user getter and setter
  loginFarmer(details: Farmer) {
    this.isLogedIn = true;
    this.userType = LoginTypes.FARMER;
    this.userDetails = details;
  }

  loginCustomer(details: Customer) {
    this.isLogedIn = true;
    this.userType = LoginTypes.CUSTOMER;
    this.userDetails = details;
  }

  loginAdmin(details: Admin) {
    this.isLogedIn = true;
    this.userType = LoginTypes.ADMIN;
    this.userDetails = details;
    
  }

  logout()
  {
    this.isLogedIn = false;
    this.userType = null;
    this.userDetails = {};
  }

  // Check loggedin user is a customer
  isCustomer() {
    return this.isLogedIn && this.userType === LoginTypes.CUSTOMER;
  }

  // Check loggedin user is a customer
  isFarmer() {
    return this.isLogedIn && this.userType === LoginTypes.FARMER;
  }

  isAdmin() {
    return this.userType === LoginTypes.ADMIN;
  }
}
