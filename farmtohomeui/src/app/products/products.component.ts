import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { CustomersComponent } from '../customers/customers.component';








@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  products: Product[];


  constructor(private productSvc: ProductService) {
    // intialize the sample data for each one
  }

  ngOnInit() {

  }
}











