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

  //added for basket
  findAll(): Product[] {
    return this.products;
}

rootURL: string;
  constructor(private httpsvc: HttpClient) {
    // intializes the url
    this.rootURL = 'http://localhost:5980/product';

}

// Update existing product
updateProductOnServer(product): Observable<Product> {

  // Set HTTP access headders
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  // Create request body
  const reqBody = 'productId=' + product.productId + '&farmerId' + product.farmerId +
  '&productName=' + product.productName + '&productType=' +
  product.productType + '&description=' + product.description + '&unitPrice=' + product.unitPrice;

  // Post update request to server
  return this.httpsvc.post<Product>(
    this.rootURL + '/register', reqBody, httpOptions);

}


//added for basket
find(productId: number): Product {
  return this.products[this.getSelectedIndex(productId)];
}

//added for basket
private getSelectedIndex(productId: number) {
  for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].productId == productId) {
          return i;
      }
  }
  return -1;
}

//basket
findProductsById(productId: number): Observable<Product> {

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };
  return this.httpsvc.get<Product>(this.rootURL + '/find/' + productId, httpOptions);
}


  loadAllProductsFromSever(): Observable<Product[]> {
    // [] ??
    return this.httpsvc.get<Product[]>(this.rootURL + "/list");
  }
  deleteAllProductsFromServer(productId): Observable<Product[]> {

    return this.httpsvc.delete<Product[]>(this.rootURL +"/delete/" +productId)
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

  deleteProductById(productId: number): Observable<Product> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return this.httpsvc.delete<Product>(this.rootURL + '/delete/' + productId, httpOptions);
  }


}
