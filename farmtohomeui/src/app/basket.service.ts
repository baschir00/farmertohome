import { Injectable } from "@angular/core";
import { Item } from "./item.entity";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  rootURL: string;
  httpOptions: { headers: HttpHeaders; };

  constructor(private httpSvc: HttpClient) {

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

  updateItem(item: Item) {
    console.log("updateItem: ", item);
    const basket: Item[] = this.getBasketFromStore();
    const index = basket.findIndex(b => b.product.productId === item.product.productId);
    basket.splice(index, 1, item);
    this.saveBasketToStore(basket);
  }

  submit(basket: Item[]){

  }
}
