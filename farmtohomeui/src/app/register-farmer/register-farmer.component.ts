import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FarmService } from '../farm.service';
import { Farmer } from "../farmer";
import { NgModel } from "@angular/forms";


@Component({
  selector: 'app-register-farmer',
  templateUrl: './register-farmer.component.html',
  styleUrls: ['./register-farmer.component.css']
})
export class RegisterFarmerComponent implements OnInit {

  farmer: Farmer;
  farmerPasswordConfirm: string;
  isFarmerFormValid: boolean;
  invalidFormMessage: string;

  constructor(private farmSvc: FarmService) {
    this.farmer = { farmerId: 0, farmerName: "", farmerEmail: "", farmerLocation: "", farmerPassword: "" };
    this.farmerPasswordConfirm = "";
  }

  ngOnInit() {

  }

  addFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword) {
    farmerName = this.farmer.farmerName;
    farmerLocation = this.farmer.farmerLocation;
    farmerEmail = this.farmer.farmerEmail;
    farmerPassword = this.farmer.farmerPassword;


    console.log('Registering farmer : addFarmer');
    console.log(farmerName, farmerLocation, farmerEmail, farmerPassword);

    if (farmerName.length < 1) {
      console.log(1)
      this.isFarmerFormValid = false;
      this.invalidFormMessage =
        'Name field is required';
    } else if (farmerEmail.length < 1) {
      console.log(2)
      this.isFarmerFormValid = false;
      this.invalidFormMessage =
        'Email field is required';
    } else if (farmerPassword !== this.farmerPasswordConfirm) {
      console.log(3)
      this.isFarmerFormValid = false;
      this.invalidFormMessage =
        'Passwords don\'t match';
    } else {
      console.log(4)
      this.farmSvc.registerFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword)
        .subscribe(
          responseDep => {
            console.log('registered farmer');

          }
        );

      this.isFarmerFormValid = true;
      this.invalidFormMessage = '';
    }
  }
}
