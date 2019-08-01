import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { CustomersComponent } from './customers/customers.component';
import { Customer } from './customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {



  rootURL: string
  constructor(private httpsvc: HttpClient) {
    // intializes the url
    this.rootURL = "http://localhost:5980/customer"
  }

  findCustomerById(customerId): Observable<CustomersComponent> {
    return this.httpsvc.get<CustomersComponent>(this.rootURL + "/find/" + customerId)
  }



  registerCustomer(customerName, customerAddress, customerEmail, // customerPassword
  ) {
    console.log('Registering customer : registerCustomer');

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }


    var reqBody = "customerName=" + customerName + "&customerAddress=" + customerAddress
      + "&customerEmail=" + customerEmail

    console.log(reqBody);

    return this.httpsvc.post<CustomersComponent>(
      this.rootURL + "/register", reqBody, httpOptions);
  }

  updateFarmOnServer(customer): Observable<CustomersComponent> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }

    var reqBody = "customerId=" + customer.customerId +
      "&customerName=" + customer.CustomersComponent + "&customerAddress=" +
      customer.CustomersComponent + "&customerEmail" + customer.customerEmail
    // post(URL,body,httpOptionswithHeaders)
    return this.httpsvc.post<CustomersComponent>(
      this.rootURL + "/register", reqBody, httpOptions)
  }
}




























