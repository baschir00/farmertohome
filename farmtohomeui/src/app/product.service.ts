import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]

  rootURL
  constructor(private httpsvc:HttpClient) {
      // intializes the url 
  this.rootURL="http://localhost:3333/apis/projects"

   }

   loadAllProjectsFromSever():Observable<Product[]>{
    // [] ??
    return this.httpsvc.get<Product[]>("http://localhost:3333/products/list")
  }
  createCustomerDetails()Observable<Customer> {

    return this.httpsvc.get<Customer>("http://localhost:3333/customer")

    
  }





}