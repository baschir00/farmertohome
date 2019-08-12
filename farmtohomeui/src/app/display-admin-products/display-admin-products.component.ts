import { Component, OnInit } from '@angular/core';
import { OrderDB } from '../order-db';

@Component({
  selector: 'app-display-admin-products',
  templateUrl: './display-admin-products.component.html',
  styleUrls: ['./display-admin-products.component.css']
})
export class DisplayAdminProductsComponent implements OnInit {

  allOrders:OrderDB

  constructor() { }

  ngOnInit() {
  }

}
