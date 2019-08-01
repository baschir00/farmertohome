import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Product } from '../product';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  IsDataPresent:boolean
  mockdata1:Product
  mockdata2:Product
  mockdata3:Product
  isEditable:boolean




  constructor() {


    this.mockdata1 = {

      productId:1,
      unitPrice:1,
      description:"product",
      productType:"fruit",
      productName:"oranges"

    }

    this.mockdata2 = {

      productId:2,
      unitPrice:1,
      description:"product",
      productType:"fruit",
      productName:"oranges"

    }

    this.mockdata1 = {

      productId:3,
      unitPrice:1,
      description:"product",
      productType:"fruit",
      productName:"oranges"

    }




   }

  ngOnInit() {
  }

}
