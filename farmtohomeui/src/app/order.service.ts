import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderDB } from './order-db';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  rootURL: string;
  httpOptions;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:5980/order";
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  loadAllOrdersFromSever(): Observable<OrderDB[]> {
    
    return this.httpsvc.get<OrderDB[]>(this.rootURL + "/list");
  }
  deleteOrderFromServer(orderId): Observable<OrderDB[]> {

    return this.httpsvc.delete<OrderDB[]>(this.rootURL +"/delete/" +orderId)
  }

 
}
