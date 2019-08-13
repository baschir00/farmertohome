import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderItemDB } from './order-item-db';

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  rootURL: string;
  httpOptions;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:5980/orderItem";
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  loadAllOrderItemsFromSever(): Observable<OrderItemDB[]> {
    
    return this.httpsvc.get<OrderItemDB[]>(this.rootURL + "/list");
  }
  deleteOrderItemsFromServer(orderItemId): Observable<OrderItemDB[]> {

    return this.httpsvc.delete<OrderItemDB[]>(this.rootURL +"/delete/" +orderItemId)
  }
}
