import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
    this.rootURL = 'http://localhost:5980/product';

  }

  loadAllProjectsFromSever(): Observable<Product[]> {
    // [] ??
    return this.httpsvc.get<Product[]>(this.rootURL + "/list");
  }

  createCustomerDetails(): Observable<Customer> {

    return this.httpsvc.get<Customer>(this.rootURL);
  }
  registerProduct(productName, productType, description, unitPrice): Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    
    var reqBody = "productName=" + productName + "&productType=" + productType
      + "&description=" + description + "&unitPrice=" + unitPrice

    console.log(reqBody);

    return this.httpsvc.post<Product>(
      this.rootURL + "/register", reqBody, httpOptions);
  }



  findProductsByName(productName: string): Observable<Product[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      params: new HttpParams()
        .set('productName', productName)
    };
    return this.httpsvc.get<Product[]>(this.rootURL + '/fetchByProductName', httpOptions);
  }
  findProductsByFarmerId(farmerId: string): Observable<Product[]> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      }),
      params: new HttpParams()
        .set("currentFarmer", farmerId)//.toString())
    };
    return this.httpsvc.get<Product[]>(this.rootURL + '/fetchByFarmer', httpOptions);
  }






}
