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

    //added for basket
  //   this.products = [
  //     { productId: 1, productName: 'Potatos', unitPrice: 3, description:'British Veg', productType:'Fruit & Veg' },
  //     { productId: 2, productName: 'Bananas', unitPrice: 2, description:'Yellow Bananas', productType:'Fruit & Veg' },
  //     { productId: 3, productName: 'Salmon', unitPrice: 7, description:'Fresh Salmon', productType:'Meat & Fish' },
  //     { productId: 4, productName: 'Chicken', unitPrice: 5, description:'Poultry', productType:'Meat & Fish' },
  //     { productId: 5, productName: 'Ham', unitPrice: 6, description:'From a Pig', productType:'Meat & Fish' },
  //     { productId: 6, productName: 'PorkChops', unitPrice: 5, description:'From a Pig', productType:'Meat & Fish' },
  //     { productId: 7, productName: 'Onion', unitPrice: 1, description:'Large Onions', productType:'Fruit & Veg' },
  //     { productId: 8, productName: 'Orange', unitPrice: 2, description:'its Orange', productType:'Fruit & Veg' },
  //     { productId: 9, productName: 'Beef', unitPrice: 6, description:'British Beef', productType:'Meat & Fish' },
  //     { productId: 10, productName: 'Apple', unitPrice: 1, description:'Green apples', productType:'Fruit & Veg' },
  // ];
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
