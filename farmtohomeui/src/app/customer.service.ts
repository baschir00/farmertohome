import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    // intializes the url
    this.rootURL = "http://localhost:5980/customer";
  }

  findCustomerById(customerId): Observable<Customer> {
    return this.httpsvc.get<Customer>(this.rootURL + "/find/" + customerId);
  }

  registerCustomer(customerName, customerAddress, customerEmail, customerPassword ) { 
    console.log('Registering customer : registerCustomer');

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    const reqBody = "customerName=" + customerName + "&customerAddress=" + customerAddress
      + "&customerEmail=" + customerEmail +"&customerPassword=" + customerPassword;

    console.log(reqBody);

    return this.httpsvc.post<Customer>(
      this.rootURL + "/register", reqBody, httpOptions);
  }

  updateFarmOnServer(customer): Observable<Customer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    const reqBody = "customerId=" + customer.customerId +
      "&customerName=" + customer.Customer + "&customerAddress=" +
      customer.Customer + "&customerEmail" + customer.customerEmail+ "&customerPassword" + customer.customerPassword;
    // post(URL,body,httpOptionswithHeaders)
    return this.httpsvc.post<Customer>(
      this.rootURL + "/register", reqBody, httpOptions);
  }
}




























