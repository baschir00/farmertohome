import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  rootURL: string;

  constructor(private httpsvs: HttpClient) {
    // init base url
    this.rootURL = 'http://localhost:5980/customers/register';
  }

  // Identify params and return type for requests
  findCustomerById(customerId: number): Observable<Customer> {
    console.log(this.rootURL +  customerId);
    return this.httpsvs.get<Customer>(this.rootURL +  customerId);
  }

  createCustomer(customer: {name: any; address: any; email: any; password: any; }): Observable<'Customer'> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/w-www-form-urlencoded'})
    };

    const reqBody = 'customerName=' + customer.name + '&customerAddress=' + customer.address + '&customerEmail=' + customer.email
    + '&customerPassword=' + customer.password;

    console.log('posting to ' + this.rootURL);
    return this.httpsvs.post<'Customer'>(this.rootURL, reqBody, options);
  }

  updateCustomer(customer: {name: any; address: any; email: any; password: any; }): Observable<'Customer'> {
    const options = {
      headers: new HttpHeaders({'Content-Type': 'application/w-www-form-urlencoded'})
    };

    const reqBody = 'customer-id=' + customer.id + 'customerName=' + customer.name + '&customerAddress=' + customer.address
      + '&customerEmail=' + customer.email + '&customerPassword=' + customer.password;

    console.log('posting to ' + this.rootURL);
    return this.httpsvs.post<'Customer'>(this.rootURL, reqBody, options);
  }
}
