import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]

  rootURL: string;
  constructor(private httpsvc: HttpClient) {
    // intializes the url
    this.rootURL = 'http://localhost:3333/apis/projects'

  }

  loadAllProjectsFromSever(): Observable<Product[]> {
    // [] ??
    return this.httpsvc.get<Product[]>(this.rootURL)
  }
  createCustomerDetails(): Observable<Customer> {

    return this.httpsvc.get<Customer>(this.rootURL)


  }

  findProductsByName(productName: string): Observable<Product[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }
    const reqBody = '?productName=' + productName;
    return this.httpsvc.get<Product[]>(this.rootURL + '/fetchByProductName' + reqBody, httpOptions)
  }





}
