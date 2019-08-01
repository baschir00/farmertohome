import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { Product } from '../product';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-basket',
  templateUrl: './customer-basket.component.html',
  styleUrls: ['./customer-basket.component.css']
})
export class CustomerBasketComponent implements OnInit {

  IsDataPresent:boolean
  mockdata1:Product
  mockdata2:Product
  mockdata3:Product




  constructor(private customersvc:CustomerService ) {


    this.IsDataPresent=true


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

  ngOnInit(): void {
    

    }


  }



