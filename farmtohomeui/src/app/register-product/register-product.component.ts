import { Component, OnInit } from '@angular/core';
import { FarmService } from "../farm.service";

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {
    isFarmerFormValid: boolean;
    invalidFormMessage: string;

    constructor(private farmSvc: FarmService) {}

    ngOnInit() {}

    addFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword) {
      farmerName = farmerName.value;
      farmerLocation = farmerLocation.value;
      farmerEmail = farmerEmail.value;
      farmerPassword = farmerPassword.value;
      console.log('Registering farmer : addFarmer');
      console.log(farmerName, farmerLocation, farmerEmail, farmerPassword);

      if (farmerName.length < 2) {
        this.isFarmerFormValid = false;
        this.invalidFormMessage =
          'Product Name numst be greater then 2 characters';
      } else {

        this.farmSvc.registerFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword)
          .subscribe(
          responseDep=>{
            console.log("registered farmer");

          }
        );

        this.isFarmerFormValid = true;
        this.invalidFormMessage = '';
      }
    }
  }
