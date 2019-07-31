import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import {Customer} from './customers/customers.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private customerSvc:CustomerService) {
    this.customerId=1

  }

ngOnInit() {
  this.fetchCurrentCustomerFromService()

}

fetchCurrentCustomerFromService() {
    this.customerSvc.findCustomerbyCustomerId(this.).subscribe (
      Response => {
        this.customerId = response.customerId
        this.customerName = response.customerName
        this.customerAddress = response.customerAddress
        this.customerEmail = response.customerEmail


    }

    )
    



}
  title = 'farmtohome';
  addNewCustomer(customerName,customerEmail,customerAddress){
    
     const cust = {
    customerName:customerName,
    customerAddress:customerAddress,
    customerEmail:customerEmail

    updateCustomerDetails() {
      this.httpsvc.updateCustomerOnServer ({
        customerId:this.customerId, customerName: this.customerName,
          customerAddress:this.customerAddress
      }).subscribe (
        response => {
          // peforms the following operation on a succesful post
          this.httpsvc.updateE
        }
      )
    }
    
    toggleEdit() {
      this.isEditable=!this.isEditable
      // if true , then details can be edited
      this.updateCustomerDetails
    

    }

   
   
    
  








  



  };

}
