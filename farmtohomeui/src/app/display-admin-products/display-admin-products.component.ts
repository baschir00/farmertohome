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

  showProducts:boolean
  buttonName4:any
  allOrders: OrderDB[]
  allOrderItems: OrderItemDB[]
  allProducts: Product[]
  editedId: number;
  isInEditMode: boolean;

  constructor(private ordSvc: OrderService, private ordItemSvc: OrderItemService, private proSvc : ProductService) {
    this.showProducts = false;
    this.cancelProductsEdit();
    this.buttonName4 = "Show Products"
   }

  ngOnInit() {

    this.loadOrders()
    this.loadOrderItems()
    this.loadProducts()
  }

  //-------------------- order edit ----------------------
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


  //-------------------- Product edit ------------------------

  toggleProducts() {
    this.showProducts = !this.showProducts;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showProducts)
      this.buttonName4 = "Hide Products";
    else
      this.buttonName4 = "Show Products";
  }

  cancelProductsEdit() {
    this.isInEditMode = false;
    this.editedId = -1;
  }

  loadProducts() {
    this.proSvc.loadAllProductsFromSever().subscribe(response => {
      this.allProducts = response
    })
  }

  editProducts(product: Product) {
    this.isInEditMode = true;
    this.editedId = product.productId;
  }

  deleteProducts(productId) {
    this.proSvc.deleteAllProductsFromServer(productId).subscribe(() => {
      this.loadProducts()
    })
  }

  saveProducts(product: Product) {
    this.isInEditMode = false;
    this.editedId = -1;
    this.proSvc.updateProductOnServer(product).subscribe( () =>  {
      this.loadProducts();
    });
  }
}

