import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { CustomersComponent } from './customers/customers.component';
import { FarmComponent } from './farm/farm.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootURLcustomer: string;
  rootURLfarmer: string;
  httpOptions;


  constructor(private httpSvc: HttpClient) {

    this.rootURLcustomer = 'http://localhost:5980/LoginCustomers';
    this.rootURLfarmer = 'http://localhost:5980/loginFarmer';

    // Set http options
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  loginFarmer(loginDetails): Observable<Config> {

    const reqBody = 'email=' + loginDetails.email +
      '&password' + loginDetails.password;

    console.log(reqBody);

    return this.httpSvc.post<FarmComponent>(
      this.rootURLfarmer + '/farmer', reqBody, this.httpOptions);
  }

  loginCustomer(loginDetails): Observable<Config> {
    // Create request body content
    const reqBody = 'email=' + loginDetails.email +
      '&password' + loginDetails.password;

    // DEBUG: print request body
    console.log(reqBody);

    return this.httpSvc.post<CustomersComponent>(
      this.rootURLcustomer + '/customer', reqBody, this.httpOptions);
  }

}




