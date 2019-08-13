import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderDB } from './order-db';
import { OrderItems } from './order-items';
import { Orders } from './orders';

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

  // Create Order on server
  registerOrder(): Observable<any> {
    const reqBody = "";
    console.log("Creating Order");

    // Sent request
    return this.httpsvc.post<Orders>(this.rootURL + "order/register", reqBody, this.httpOptions);
  }

  // Create Order item on server
  registerOrderItem(quantity): Observable<any> {
    console.log("Creating Order Item");
    // Create request body
    const reqBody = "quantity" + quantity;

    // DEBUG: reqBody content
    console.log(reqBody);

    // Sent request
    return this.httpsvc.post<OrderItems>(this.rootURL + "orderItem/register", reqBody, this.httpOptions);
  }

  // Link an item to it's order
  linkOrderItemToOrder(orderItemId, orderId) {
    console.log("Linking OrderItem to Order");
    // Create request body
    const reqBody = "orderId=" + orderId + "&orderItemId=" + orderItemId;

    // DEBUG: reqBody content
    console.log(reqBody);

    // Sent request
    return this.httpsvc.post<OrderItems>(this.rootURL + "order/assign/orderItem", reqBody, this.httpOptions);
  }

  // Link an order to it's product
  linkOrderToCustomer(orderId, customerId) {
    console.log("Linking Order to Customer");
    // Create request body
    const reqBody = "orderId=" + orderId + "&customerId=" + customerId;

    // DEBUG: reqBody content
    console.log(reqBody);

    // Sent request
    return this.httpsvc.post<Orders>(this.rootURL + "order/assign/customer", reqBody, this.httpOptions);
  }

  // Link an item the it's product
  linkOrderItemToProduct(orderItemId, productId) {
    console.log("Linking OrderItem to Product");
    // Create request body
    const reqBody = "productId=" + productId + "&orderItemId=" + orderItemId;

    // DEBUG: reqBody content
    console.log(reqBody);

    // Sent request
    return this.httpsvc.post<OrderItems>(this.rootURL + "product/assign/orderItem", reqBody, this.httpOptions);
  }



}
