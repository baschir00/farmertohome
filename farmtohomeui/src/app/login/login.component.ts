import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomersComponent } from '../customers/customers.component';
import { LoginService } from '../login.service';
import { RouterLink } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  customerEmail:string
  farmerEmail:string
  IsValid:boolean
  






  constructor(private loginSvc:LoginService) { }

  



  ngOnInit() {
    this.fetchCurrentCustomerEmailFromService
    this.fetchCurrentFarmerEmailFromService
  }



  //  fetchCurrentCustomerEmailFromService(customerEmail) {
  //   this.loginSvc.findCustomerByEmail(this.customerEmail).subscribe (
  //    //use the response to intialize the component properties
  //   response =>  {
  //     if(this.customerEmail == response.customerEmail){
  //          RouterLink: '/customers'

  //     }
  //     else {

  //       console.log("invalid cutomerEmail")
  //     }


  //     loginCustomerEmail(customerEmail) {
  //       this.loginSvc.assigncustomerEmailtoLogin(
  //         this.customerEmail).subscribe ( 
  //           response => {

  //           }
  //         )
        
  //     }


    






//    })

//    fetchCurrentFarmerEmailFromService(farmerEmail) {
//     this.loginSvc.findFarmerByEmail(this.farmerEmail).subscribe (
//      //use the response to intialize the component properties
//     response =>  {
//       if(this.customerEmail == response.farmerEmail){
//            RouterLink: '/farmer'

//       }
//       else {

//         console.log("invalid farmerEmail")
//       }


    

  




// }
}
   
  







  



