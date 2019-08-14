import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FarmService } from '../farm.service';
import { Product } from '../product';
import { LoginDetailsService } from "../login-details.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registerproduct',
  templateUrl: './registerproduct.component.html',
  styleUrls: ['./registerproduct.component.css']
})
export class RegisterproductComponent implements OnInit {
  result: Product;

  farmerId: number
  isProductFormValid: boolean
  invalidFormMessage: string

  constructor(private productSvc: ProductService, private farmSvc: FarmService,
    private details: LoginDetailsService, private router: Router) {
    this.farmerId = 4;
  }

  ngOnInit() {
  }

  checkPassword(password, comfirmpassword) {
    if (password.value === comfirmpassword) {

    }
  }

  addProduct(productName, productType, description, unitPrice) {
    productName = productName.value;
    productType = productType.value;
    description = description.value;
    unitPrice = unitPrice.value;

    console.log('Registering Product : addProduct');
    console.log(productName, productType, description, unitPrice);

    if (productName.length < 2) {
      this.isProductFormValid = false;
      this.invalidFormMessage =
        'Product Name numst be greater then 2 characters';
    } else {

      this.productSvc.registerProduct(productName, productType, description, unitPrice)
        .subscribe(
          responseDep => {
            //console.log("registered product");
            this.result = responseDep;
            //console.log(this.result, "results in");
            this.farmSvc.assignProductToFarm(this.details.userDetails.farmerId , this.result.productId)
            .subscribe(
              respone => {
              this.result.productId = respone.productId
              this.result.farmerId = respone.farmerId
            }
          );
         }
       );

      this.isProductFormValid = true;
      this.invalidFormMessage = '';
      this.router.navigate(['/editFarmer']);
    }

  }
}
