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

  title = 'farmtohome';
    customerId:number
    customerName:string
    customerAddress:string
    customerEmail:string

    isEditable: boolean
    isProjectFormVisible:boolean

    isProjectFormValid:boolean
    invalidFormMessage:String
    
    allCustomers:Customer[]
    




  constructor(private customerSvc:CustomerService) {
    this.customerId=1
    this.customerName=""
    this.customerAddress=""
    this.customerEmail=""

  }

ngOnInit() {
  
}


addFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword) {
  customerName = farmerName.value;
  customerLocation = farmerLocation.value;
  farmerEmail = farmerEmail.value;
  farmerPassword = farmerPassword.value;
  console.log('Registering farmer : addFarmer');
  console.log(farmerName, farmerLocation, farmerEmail, farmerPassword);


fetchCurrentCustomerFromService() {
    this.customerSvc.findCustomerbyCustomerId(this.customerId).subscribe (
     response => {
       this.customerId = response.customerId
        this.customerName = response.customerName
         this.customerAddress = response.customerAddress
         this.customerEmail = response.customerEmail
        

     }

     )
}

addNewCustomer(customerName,customerEmail,customerAddress){
    
     const cust = {
    customerName:this.customerName,
    customerAddress:this.customerAddress,
    customerEmail:this.customerEmail
     }
     
    }
    updateCustomerDetails() {
      this.customerSvc.updateCustomerOnServer ({
        customerId:this.customerId, customerName: this.customerName,
          customerAddress:this.customerAddress
      }).subscribe (
        response => {
          // peforms the following operation on a succesful post
          this.customerSvc.updateCustomerCustomerIdOnServer(this.customerName,this.customerId).subscribe(
            response => {
              this.fetchCurrentCustomerFromService()
            }
          )
        }
      )
    }
    
    toggleEdit() {
      this.isEditable=!this.isEditable
      // if true , then details can be edited
      this.updateCustomerDetails
    

    }

   
   
    

  








  



  }

