import { Component, OnInit } from '@angular/core';
import { OrderDB } from '../order-db';
import { OrderService } from '../order.service';
import { OrderItemService } from '../order-item.service';
import { OrderItemDB } from '../order-item-db';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-display-admin-products',
  templateUrl: './display-admin-products.component.html',
  styleUrls: ['./display-admin-products.component.css']
})
export class DisplayAdminProductsComponent implements OnInit {

  allOrders: OrderDB[]
  allOrderItems: OrderItemDB[]
  allProducts: Product[]

  constructor(private ordSvc: OrderService, private ordItemSvc: OrderItemService, private proSvc : ProductService) { }

  ngOnInit() {

    this.loadOrders()
    this.loadOrderItems()
    this.loadProducts()
  }

  loadOrders() {

    this.ordSvc.loadAllOrdersFromSever().subscribe(response => {

      this.allOrders = response

    })

  }

  deleteOrder(orderId) {
    this.ordSvc.deleteOrderFromServer(orderId).subscribe(() => {
      this.loadOrders()
      this.loadOrderItems()
    })
  }

  loadOrderItems() {
    this.ordItemSvc.loadAllOrderItemsFromSever().subscribe(response => {
      this.allOrderItems = response

    })

  }


  deleteOrderItems(orderItemId) {
    this.ordItemSvc.deleteOrderItemsFromServer(orderItemId).subscribe(() => {
      this.loadOrderItems()
    })

  }

  loadProducts() {
    this.proSvc.loadAllProductsFromSever().subscribe(response => {
      this.allProducts = response

    })

  }


  deleteProducts(productId) {
    this.proSvc.deleteAllProductsFromServer(productId).subscribe(() => {
      this.loadProducts()
    })

  }


}