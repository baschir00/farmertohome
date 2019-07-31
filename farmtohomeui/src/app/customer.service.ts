import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { customers } from './customers/customers.component';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  

  rootURL:string
  constructor(private httpsvc:HttpClient) {
      // intializes the url 
  this.rootURL="http://localhost:3333/customer"
  }


  findCustomerbyCustomerId(customerId):Observable<AppComponent> {
    return this.httpsvc.get<AppComponent>(this.rootURL + "/find/" + customerId)
  }


updateCustomerOnServer(customer):Observable<AppComponent>{
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

return this.httpsvc.post<AppComponent>(
  this.rootURL + "/register", 
  reqBody,httpOptions
)




}




}







}


