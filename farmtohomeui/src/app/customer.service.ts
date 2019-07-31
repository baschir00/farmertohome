import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  

  rootURL:string
  constructor(private httpsvc:HttpClient) {
      // intializes the url 
  this.rootURL="http://localhost:3333/customer"
  }


updateCustomerOnServer(customer):Observable<Customer>{
  const httpOptions={
    headers: new HttpHeaders( {
      "Content-Type": "application/x-www-form-urlencoded"})
    }

// key and value pair

var reqBody = "customerId=" + customer.customerId+"&customerName" 
                + customer.customerName + "&customerAddress" 
                + customer.customerAddress + "&customerEmail"
                + customer.customerEmail 
                // post (URL,body,httpOptionsswitchHeaders)

return this.httpsvc.post<Customer>(
  this.rootURL + "/register", 
  reqBody,httpOptions
)





}







}


