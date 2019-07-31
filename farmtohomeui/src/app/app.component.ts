import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmtohome';
  addNewCustomer(customerName,customerEmail,customerAddress){

     const cust = {
    customerName:customerName,
    customerAddress:customerAddress,
    customerEmail:customerEmail



    }



  };

}
