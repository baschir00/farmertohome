import { Component, OnInit } from "@angular/core";
import { Item } from "../item.entity";
import { ProductService } from "../product.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../product.entity";
import { BasketService } from "../basket.service";
import { LoginDetailsService } from "../login-details.service";
import { async } from "rxjs/internal/scheduler/async";

// all added for basket
@Component({
  templateUrl: "basket.component.html"
})
export class BasketComponent implements OnInit {
  items: Item[] = [];
  total: number;
  private basket: any[];
  // private obseverstore;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private basketService: BasketService,
    private details: LoginDetailsService,
    private router: Router
  ) {
    this.items = [];
  }

  ngOnInit() {
    // On redirect to basket
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      const addedProduct: Product = params.product;
      // If new item added
      if (addedProduct) {
        // then get new item details and quantities
        const item: Item = {
          product: addedProduct,
          quantity: 1
        };
        // add new item to basket
        this.basketService.addItemToBasket(item);
      }
      // Display basket items and total
      this.loadBasket();
    });
  }

  loadBasket() {
    this.total = 0;
    this.items = [];
    const basket = JSON.parse(localStorage.getItem("basket"));
    for (const basketItem of basket) {
      const item = JSON.parse(basketItem);
      this.items.push({
        product: item.product,
        quantity: item.quantity
      });
      this.total += item.product.unitPrice * item.quantity;
    }
  }

  removeItemFromBasket(productId) {
    console.log("removeItemFromBasket: ", productId);
    this.basketService.remove(productId);
    this.loadBasket();
  }

  updateBasket(item) {
    console.log("updateBasket: ", item);
    this.basketService.updateItem(item);
    this.loadBasket();
  }



  async submitOrder() {
    console.log("submitOrder: ");

    if (this.details.isCustomer()) {

      let result = await this.basketService.submit()
      console.log(result);

      console.log("basketService.submit: inner func");
      console.log("basketService.clear")
      this.basketService.clear();
      console.log("loadBasket")

      this.loadBasket();
    } else {
      console.log("Not loggedin");
      this.router.navigate(['/loginCustomer']);
    }
  }
}
