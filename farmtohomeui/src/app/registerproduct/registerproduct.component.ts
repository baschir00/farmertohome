import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { FarmService } from '../farm.service';
import { Product } from '../product';

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
  productId: number



  constructor(private productSvc: ProductService, private farmSvc: FarmService) { 
    this.farmerId = 8;
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
           // console.log("registered product");
            this.result = responseDep;
           // console.log(this.result, "results in");
            this.farmSvc.assignProductToFarm(this.farmerId, this.result.productId).subscribe(
              responseassign => {this.result.farmerId=responseassign.farmerId
                this.result.productId= responseassign.productId
              }
            );
          }
        );

      this.isProductFormValid = true;
      this.invalidFormMessage = '';

    }

  }
}
