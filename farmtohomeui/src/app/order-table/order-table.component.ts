import { Component, OnInit } from '@angular/core';
import { OrderService } from "../order.service";
import { OrderItemService } from "../order-item.service";
import { OrderDB } from "../order-db";
import { OrderItemDB } from "../order-item-db";
import { LoginDetailsService } from "../login-details.service";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  allOrders: OrderDB[]
  allOrderItems: OrderItemDB[]
  editedId: number;
  isInEditMode: boolean;

  constructor(private ordSvc: OrderService, private ordItemSvc: OrderItemService, private detailsSvc: LoginDetailsService) { }

  ngOnInit() {

    this.loadOrders()
    this.loadOrderItems()
  }

  //-------------------- order edit ----------------------
  loadOrders() {
    this.ordSvc.loadOrdersByCustomer(this.detailsSvc.userDetails.customerId).subscribe(response => {
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

}
