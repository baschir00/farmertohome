import { Injectable } from "@angular/core";
import { Item } from "./item.entity";

@Injectable({
  providedIn: "root"
})
export class BasketService {
  constructor() {}

  getBasketFromStore(): Item[] {
    const basket: Item[] = JSON.parse(localStorage.getItem("basket"))
      .map(item => JSON.parse(item));
    return basket;
  }

  saveBasketToStore(items: Item[]): void {
    const basket: Item[] = JSON.parse(localStorage.getItem("basket"))
      .map(item => JSON.parse(item));
    return basket;
  }

  addItemToBasket(item: Item) {
    const basket: any = [];
    // If basket is not initalised
    if (localStorage.getItem("basket") == null) {
      // Then create new basket in memmory and add item
      basket.push(JSON.stringify(item));
      localStorage.setItem("basket", JSON.stringify(basket));

      // If basket is initalised
    } else {
      // get basket
      const basket: any = JSON.parse(localStorage.getItem("basket"));

      // index flag
      let index = -1;

      // for each item in basket
      for (let i = 0; i < basket.length; i++) {
        // get item from item json
        const currentItem: Item = JSON.parse(basket[i]);

        // if item in basket get index and break loop
        if (item.product.productId === currentItem.product.productId) {
          index = i;
          break;
        }
      }

      // If new item in basket
      if (index == -1) {
        // Add item to basket
        basket.push(JSON.stringify(item));
        localStorage.setItem("basket", JSON.stringify(basket));

        // If item exists in basket
      } else {
        // Add to quantity of item in basket
        const currentItem: Item = JSON.parse(basket[index]);
        item.quantity += currentItem.quantity;
        basket[index] = JSON.stringify(item);
        localStorage.setItem("basket", JSON.stringify(basket));
      }
    }
  }

  remove(productId: number) {
    const basket: any = JSON.parse(localStorage.getItem("basket"));
    const index = -1;
    for (let i = 0; i < basket.length; i++) {
      const item: Item = JSON.parse(basket[i]);
      if (item.product.productId == productId) {
        basket.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("basket", JSON.stringify(basket));
  }

  updateItem(item: Item) {
    console.log("updateItem: ", item);
    const basket: any = JSON.parse(localStorage.getItem("basket"));
    const index: number = basket.findIndex(
      b => b.product.productId === item.product.productId
    );
    basket[index] = JSON.stringify(item);
    localStorage.setItem("basket", JSON.stringify(basket));
  }
}
