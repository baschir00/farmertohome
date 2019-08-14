import { Component, OnInit } from '@angular/core';
import { FarmService } from '../farm.service';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { LoginDetailsService } from '../login-details.service';
import { Router } from '@angular/router';
import { Farmer } from '../farmer';
//import { farmer } from '../farmer'
@Component({
  selector: 'app-edit-farmer',
  templateUrl: './edit-farmer.component.html',
  styleUrls: ['./edit-farmer.component.css']
})
export class EditFarmerComponent implements OnInit {

  farmer: Farmer;

  productId: number
  productName: string
  isEditable: boolean
  allProducts: Product[]
  assignments: Product[]
  // isProjectFormVisible:boolean
  // invalidFormValid:boolean
  // invalidFormMessage: String
  // isProjectFormValid: boolean;

  constructor(private farmerSvc: FarmService,
    private prod2Svc: ProductService,
    private details: LoginDetailsService,
    private router: Router) {

    this.isEditable = false
    this.farmer = { farmerId: 0,
      farmerEmail: "n/a",
      farmerLocation: "n/a",
      farmerName: "n/a",
      farmerPassword: "n/a" }
    //
    //this.productId=13
    //this.productName="Jack fruit"
    this.assignments =
      [
        {
          productId: 44, productName: "Potato",
          unitPrice: 2,
          description: "veg",
          productType: "veg",
          farmerId: 5,
          currentFarmer: []
        }


      ]

  }


  toggleEdits() {
    this.isEditable = !this.isEditable
    //this.loadAllDepartments()
    // this.updateEmployeeDetails()

  }
  deleteProduct(index,productId){
   // this.assignments.splice(index,1)
    this.prod2Svc.deleteProductById(productId).subscribe(response=> {
      this.loadFarmerProducts()
    })


    }


  ngOnInit() {
    console.log("Login datails: ", this.details.userDetails);
    console.log("is farmer logedin : ", this.details.isFarmer);

    if (this.details.isFarmer()) {
      //this.fetchCurrentFarmerFromService()
      this.farmer = this.details.userDetails
      this.loadFarmerProducts()
    } else {
     this.router.navigate(['/loginFarmer'])

    }

  }

  loadFarmerProducts() {
    this.prod2Svc.findProductsByFarmerId(this.farmer.farmerId.toString())
      .subscribe(
        response => {
          this.assignments = response
        })
  }

}
