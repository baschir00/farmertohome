import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { from } from 'rxjs';
import { Customer } from '../customer';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {


  isCustomerFormValid: boolean
  invalidFormMessage: string

  constructor(private customerSvc: CustomerService) {

  }


  ngOnInit() {

  }

  checkPassword(password, comfirmpassword) {
    if (password.value === comfirmpassword) {

    }
  }

  addCustomer(customerName, customerEmail, customerAddress,  //customerPassword
  ) {
    customerName = customerName.value;
    customerEmail = customerEmail.value;
    customerAddress = customerAddress.value;
    // customerPassword = customerPassword.value;
    console.log('Registering Customer : addCustomer');
    console.log(customerName, customerAddress, customerEmail,//customerPassword
    );


    if (customerName.length < 2) {
      this.isCustomerFormValid = false;
      this.invalidFormMessage =
        'Customer Name numst be greater then 2 characters';
    } else {

      this.customerSvc.registerCustomer(customerName, customerAddress, customerEmail, //customerPassword
      )
        .subscribe(
          responseDep => {
            console.log("registered customer");

          }
        );

      this.isCustomerFormValid = true;
      this.invalidFormMessage = '';

    }

  }
}
