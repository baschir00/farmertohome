import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomersComponent } from './customers/customers.component';
import { FarmComponent } from './farm/farm.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  rootURLcustomer:string
  rootURLfarmer:string
constructor(private httpSvc:HttpClient) {

  this.rootURLcustomer="http://localhost:5980/customers"
  this.rootURLfarmer="http://localhost:5980/farmer"
 }


  ngOnInit() {
  }

  findCustomerByEmail(customerEmail):Observable<CustomersComponent> {
    return this.httpSvc.get<CustomersComponent>(this.rootURLcustomer + "/find"+ customerEmail)
  }

  findFarmerByEmail(farmerEmail):Observable<FarmComponent> {
    return this.httpSvc.get<FarmComponent>(this.rootURLcustomer + "/find"+ farmerEmail)
  }



  


  }



