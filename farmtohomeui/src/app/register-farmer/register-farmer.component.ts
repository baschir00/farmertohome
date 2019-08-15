import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmService } from '../farm.service';
import { Router } from "@angular/router";
import { AssertNotNull } from "@angular/compiler";


@Component({
  selector: 'app-register-farmer',
  templateUrl: './register-farmer.component.html',
  styleUrls: ['./register-farmer.component.css']
})
export class RegisterFarmerComponent implements OnInit {
  isFarmerFormValid: boolean;
  invalidFormMessage: string;

  constructor(private farmSvc: FarmService, private router: Router) { }

  ngOnInit() { }

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
      confirm("Inavlid Farmer Name")
    } else {

      this.farmSvc.registerFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword)
        .subscribe(
          responseDep => {
            console.log('registered farmer');
            confirm("Sumbitted Details")
            this.router.navigate(['loginFarmer'])
            
          }
        );

      this.isFarmerFormValid = true;
      this.invalidFormMessage = '';
      this.router.navigate(['/loginFarmer']);
    }
  }
}
