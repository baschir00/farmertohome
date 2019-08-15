import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { from } from 'rxjs';
import { Customer } from '../customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {

  isRegistered: boolean;
  customer: Customer;
  customerPasswordConfirm: string;
  isCustomerFormValid: boolean
  invalidFormMessage: string

  constructor(private customerSvc: CustomerService, private router: Router) {
    this.customer = { customerId: 0, customerName: "", customerEmail: "", customerAddress: "", customerPassword: "" };
    this.customerPasswordConfirm = "";
    this.isRegistered = true;
  }


  ngOnInit() {

  }

  checkPassword(password, comfirmpassword) {
    if (password.value === comfirmpassword) {

    }
  }

  addCustomer(customerName, customerEmail, customerAddress,customerPassword) {
    customerName = this.customer.customerName;
    customerEmail = this.customer.customerEmail;
    customerAddress = this.customer.customerAddress;
    customerPassword = this.customer.customerPassword;
    console.log('Registering Customer : addCustomer');
    console.log(customerName, customerAddress, customerEmail,customerPassword
    );


    if (customerName.length < 1) {
      console.log(1)
      this.isCustomerFormValid = false;
      this.invalidFormMessage =
        'Name field is required';
    } else if (customerEmail.length < 1) {
      console.log(2)
      this.isCustomerFormValid = false;
      this.invalidFormMessage =
        'Email field is required';
    } else if (customerPassword !== this.customerPasswordConfirm) {
      console.log(3)
      this.isCustomerFormValid = false;
      this.invalidFormMessage =
        'Passwords don\'t match';
    //
    } else if (customerAddress.length < 1) {
      console.log(2)
      this.isCustomerFormValid = false;
      this.invalidFormMessage =
        'Adress field is required';
    } else {

      this.customerSvc.registerCustomer(customerName, customerAddress, customerEmail, customerPassword)
        .subscribe(
          responseDep => {

            console.log("registered customer");
            this.isRegistered = true;
            this.router.navigate(['/loginCustomer']);
          }
        );

      this.isCustomerFormValid = true;
      this.invalidFormMessage = '';

    }
  }
}
