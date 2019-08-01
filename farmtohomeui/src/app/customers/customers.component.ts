import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {


  customerId: number
  customerName: string
  customerAddress: string
  customerEmail:string
  isEditable:boolean;
  isCustomerFormVisible:boolean
  isCustomerFormValid:boolean
  assignments: Customer[]












  constructor(private customerSvc:CustomerService) {
    this.isEditable= false
    this.isCustomerFormVisible=false
    this.isCustomerFormValid=true
    this.customerId=1
    this.customerName="bob"
    this.customerAddress="bob"
    this.customerEmail="bob@.com"
    this.assignments = [{
        customerId:1,
        customerName:"bob",
        customerAddress:"bob",
        customerEmail:"bob"



    }]



  }

  ngOnInit() {
    this.fetchCustomerFromService()
  }

fetchCustomerFromService() {

  this.customerSvc.findCustomerById(this.customerId).subscribe(
    response => {
      this.customerId=response.customerId
      this.customerName=response.customerName
      this.customerAddress=response.customerAddress
      this.customerEmail=response.customerEmail

    }
  )
}








}
