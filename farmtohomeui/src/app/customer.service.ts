import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  

  rootURL:string
  constructor(private httpsvc:HttpClient) {
      // intializes the url 
  this.rootURL="http://localhost:5980/customer"
  }


  
  registerCustomer(customerName, customerEmail, customerAddress) {
    console.log('Registering farmer : registerFarmer');

    const httpOptions= {
      headers: new HttpHeaders({
        "Content-Type":"application/x-www-form-urlencoded"
      })
    };
}




















