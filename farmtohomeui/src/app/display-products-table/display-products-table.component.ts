import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-products-table',
  templateUrl: './display-products-table.component.html',
  styleUrls: ['./display-products-table.component.css']
})
export class DisplayProductsTableComponent implements OnInit {

  private products: Product[];

  constructor(private prodSvc: ProductService) {
    this.products = [
      { productId: -1, unitPrice: 0.0, description: "test product", productType: "test product", productName: "test product" }
    ];
  }

  ngOnInit() {
    this.products = this.prodSvc.findAll();
    this.prodSvc.loadAllProductsFromSever().subscribe(
      resp => {
        this.products = resp;
        console.log(resp);

      }
    );

  }

}
