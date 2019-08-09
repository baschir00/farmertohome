import { Component, OnInit } from "@angular/core";
import { Product } from "../product.entity";
import { ProductService } from "../product.service";
import { BasketService } from "../basket.service";
import { Item } from "../item.entity";

@Component({
  selector: "app-display-products-table",
  templateUrl: "./display-products-table.component.html",
  styleUrls: ["./display-products-table.component.css"]
})
export class DisplayProductsTableComponent implements OnInit {
  products: Product[];
  items: Item[];

  constructor(
    private prodSvc: ProductService,
    private basketService: BasketService
  ) {
    this.products = [];
  }

  addProductToBasket(item) {
    {
      console.log("adding item to basket: ", item);

      this.basketService.addItemToBasket(item);
    }
    item.quantity = 1;
  }

  ngOnInit() {
    this.products = this.prodSvc.findAll();
    this.prodSvc.loadAllProductsFromSever().subscribe(resp => {

      this.products = resp;
      this.items = this.products.map(product => {
        return { product: product, quantity: 1 };
      });

      console.log(resp);
    });
  }
}
