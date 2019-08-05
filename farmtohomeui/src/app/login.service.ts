import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomersComponent } from './customers/customers.component';
import { FarmComponent } from './farm/farm.component';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootURLcustomer:string
  rootURLfarmer:string
constructor(private httpSvc:HttpClient) {

  this.rootURLcustomer="http://localhost:5980/LoginCustomers"
  this.rootURLfarmer="http://localhost:5980/loginFarmer"
 }


  ngOnInit() {
  }

  loginFarmer(loginDetails):Observable<Config> {
    const httpOptions= {
      headers: new HttpHeaders({
        "Content-Type":"application/x-www-form-urlencoded"
      })
    };

    
    var reqBody= "email=" + loginDetails.email +
        "&password" + loginDetails.password

    console.log(reqBody);

    return this.httpSvc.post<FarmComponent>(
      this.rootURLfarmer+"/farmer", reqBody, httpOptions);

    

  }


  loginCustomer(loginDetails):Observable<Config> {
    const httpOptions = {
      headers: new HttpHeaders ({
        "Content-Type":"application/x-www-form-urlencoded"
      })

    };
    var reqBody = "email=" + loginDetails.email +
        "&password" + loginDetails.password
console.log(reqBody)

return this.httpSvc.post<CustomersComponent> (
  this.rootURLcustomer+"/customer" ,reqBody , httpOptions);
    





  }



  

}
  



