import { Injectable } from "@angular/core";
import { Item } from "./item.entity";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OrderService } from "./order.service";
import { LoginDetailsService } from "./login-details.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  rootURL: string;
  httpOptions: { headers: HttpHeaders; };

  constructor(private orderSvc: OrderService, private details: LoginDetailsService) {

    this.rootURL = 'http://localhost:5980/';

    // Set http options
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
  }

  getBasketFromStore(): Item[] {
    console.log("getBasketFromStore");

    const basket: Item[] = JSON.parse(localStorage.getItem("basket"))
      .map(item => JSON.parse(item));
    console.log(basket);

    return basket;
  }

  saveBasketToStore(items: Item[]): void {
    console.log("saveBasketToStore");
    const stringedTtems = items.map(item => JSON.stringify(item));
    const newBasket = JSON.stringify(stringedTtems);
    console.log(newBasket);
    localStorage.setItem("basket", newBasket);
  }

  addItemToBasket(newItem: Item) {
    let basket: Item[] = [];
    // If basket is not initalised
    if (localStorage.getItem("basket") == null) {
      // Then create new basket in memmory and add item
      basket.push(newItem);
      this.saveBasketToStore(basket);

      // If basket is initalised
    } else {
      // get basket
      basket = this.getBasketFromStore();
      const index = basket.findIndex(x => x.product.productId === newItem.product.productId);

      // If new item in basket
      if (index === -1) {
        // Add item to basket
        basket.push(newItem);
        this.saveBasketToStore(basket);

        // If item exists in basket
      } else {
        // Add to quantity of item in basket
        basket[index].quantity += newItem.quantity;
        this.saveBasketToStore(basket);
      }
    }
  }

  remove(productId: number) {
    const basket: any = JSON.parse(localStorage.getItem("basket"));
    const index = -1;
    for (let i = 0; i < basket.length; i++) {
      const item: Item = JSON.parse(basket[i]);
      if (item.product.productId === productId) {
        basket.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  clear() {
    let basket = this.getBasketFromStore()
    basket.forEach( item => {
      this.remove(item.product.productId);
    });
  }

  updateItem(item: Item) {
    console.log("updateItem: ", item);
    const basket: Item[] = this.getBasketFromStore();
    const index = basket.findIndex(b => b.product.productId === item.product.productId);
    basket.splice(index, 1, item);
    this.saveBasketToStore(basket);
  }

  submit() {

    if (this.details.isCustomer()) {
      const basket = this.getBasketFromStore();
      // Create order
      console.log("registerOrder");
      this.orderSvc.registerOrder().subscribe(ordresp => {
        // link customer to order
        this.orderSvc.linkOrderToCustomer(ordresp.orderId, this.details.userDetails.customerId).subscribe();
        // Create all order items
        basket.forEach(item => {
          console.log("registerOrderItem");
          this.orderSvc.registerOrderItem(item.quantity).subscribe(itemresp => {
            // link items to order
            this.orderSvc.linkOrderItemToOrder(itemresp.orderItemId, ordresp.orderId).subscribe( resp => {
              // link products to items
              this.orderSvc.linkOrderItemToProduct(itemresp.orderItemId, item.product.productId).subscribe();
            });



          })
        })
      })
    }
  }
}
