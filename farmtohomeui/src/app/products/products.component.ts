import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.entity';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];


  constructor(private productSvc: ProductService) {

  }

  ngOnInit() {
    //added for basket
    this.products=this.productSvc.findAll();
  }
}











