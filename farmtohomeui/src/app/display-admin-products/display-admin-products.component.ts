import { Component, OnInit } from '@angular/core';
import { OrderDB } from '../order-db';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-display-admin-products',
  templateUrl: './display-admin-products.component.html',
  styleUrls: ['./display-admin-products.component.css']
})
export class DisplayAdminProductsComponent implements OnInit {

  allOrders: OrderDB[]

  constructor(private ordSvc: OrderService) { }

  ngOnInit() {

    this.loadOrders()
  }

  loadOrders() {

    this.ordSvc.loadAllOrdersFromSever().subscribe(response => {

      this.allOrders = response;

    })

  }

  deleteOrder(orderId){
    this.ordSvc.deleteOrderFromServer(orderId).subscribe(() => {
      this.loadOrders()
    })
    
    }
}