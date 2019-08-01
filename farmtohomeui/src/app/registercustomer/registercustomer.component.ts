import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

  invalidRegisterMessage = String

  constructor(private custSvc: CustomerService) {


  }

  ngOnInit() {

  }

  addNewCustomer() {
    this.custSvc.createCustomer();
  }

  checkPassword(password, comfirmpassword) {
    if (password.value === comfirmpassword) {

    }
    else {

    }
  }


}



