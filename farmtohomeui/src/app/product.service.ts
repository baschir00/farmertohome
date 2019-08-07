import { Injectable } from '@angular/core';
import { Product } from './product.entity';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { ProductsComponent } from './products/products.component';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]

  //added for basket
  findAll(): Product[] {
    return this.products;
}

rootURL: string;
  constructor(private httpsvc: HttpClient) {
    // intializes the url
    this.rootURL = 'http://localhost:5980/product';

    //added for basket
    this.products = [
      { productId: 101, productName: 'potatos', unitPrice: 5, description:'potatos', productType:'veg' },
      { productId: 102, productName: 'bananas', unitPrice: 5, description:'bananas', productType:'fruit' },
      { productId: 103, productName: 'fish', unitPrice: 5, description:'fish', productType:'fish' },
  ];
}

//added for basket
find(productId: number): Product {
  return this.products[this.getSelectedIndex(productId)];
}

//added for basket
private getSelectedIndex(productId: number) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].productId == productId) {
          return i;
      }
  }
  return -1;
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





}
