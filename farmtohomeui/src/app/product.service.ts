import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  this.rootURL="http://localhost:3333/apis/products"

   }

  
  
  updateProductOnServer(product):Observable<Product>{
    const httpOptions= {
      headers: new HttpHeaders ( {
        "Content-Type": "application/x-www-form-urlencoded"})
      }

      var reqBody = "productId=" + product.productId + "&productName"
                      "&description=" + product.description + 
                      "&productType" + product.productType 
                        + "&unitPrice" + product.unitPrice


      return this.httpsvc.post<Product>(
          this.rootURL + "/register", 
                          reqBody,httpOptions
                        )
    
    }
  }










