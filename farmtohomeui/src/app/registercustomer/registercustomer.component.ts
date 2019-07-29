import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {


  invalidRegisterMessage=String


  constructor() {


   }

  ngOnInit() {
    
  }


  registerCustomerDetails() {

  }

  checkPassword(password,comfirmpassword) {
   if (password.value === comfirmpassword ) {

   }
   else {
      
  }
} 

   
}
  


