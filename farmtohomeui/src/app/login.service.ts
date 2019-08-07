import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Farmer } from './farmer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootURL: string;
  httpOptions;


  constructor(private httpSvc: HttpClient) {

    this.rootURL = 'http://localhost:5980/login';

    // Set http options
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  loginFarmer(loginDetails): Observable<any> {

    const reqBody = 'farmerEmail=' + loginDetails.farmerEmail +
      '&farmerPassword=' + loginDetails.farmerPassword;

    console.log(reqBody);

    return this.httpSvc.post<Farmer>(
      this.rootURL + '/farmer', reqBody, this.httpOptions);
  }

  loginCustomer(loginDetails): Observable<Config> {
    // Create request body content
    const reqBody = 'customerEmail=' + loginDetails.farmerEmail +
      '&customerPassword=' + loginDetails.farmerPassword;

    // DEBUG: print request body
    console.log(reqBody);

    return this.httpSvc.post<Customer>(
      this.rootURL + '/customer', reqBody, this.httpOptions);
  }

}




