// import { Component, OnInit } from '@angular/core';
// import { FarmService } from '../farm.service';
// import { Product } from '../product';

// @Component({
//   selector: 'app-farm',
//   templateUrl: './farm.component.html',
//   styleUrls: ['./farm.component.css']
// })
// export class FarmComponent implements OnInit {

//   farmerId: number
//   farmerName: string
//   farmerLocation: string
//   farmerEmail: string
//   assignment: Product[]
//   isEditable:boolean;
//   isProductFormVisible:boolean
//   isProductFormValid:boolean
//   invalidFormMessage:String
//   allProducts:Product[]
//   selectedproductId:number

//   constructor(private farmSvc:FarmService) { 
//     this.isEditable = false
//     this.isProductFormVisible=false
//     this.isProductFormValid=true
//     this.farmerId=1
//     this.farmerName="blaaaaa"
//     this.farmerLocation="blaaaa"
//     this.farmerEmail="blaaaa@blaaa.com"
//     this.assignment = [{
//       // productId:1,
//       // productName:"tato",
//       // description:"they're potatos",
//       // productType:"tato",
//       // unitPrice:2
//     },
//     // { productId:2,
//     //   productName:"tato",
//     //   description:"they're potatos",
//     //   productType:"tato",
//     //   unitPrice:2
//     //  }]
//     // }

//   ngOnInit() {
//     this.fetchFarmFromService()
//   }

//   fetchFarmFromService(){
//     this.farmSvc.findFarmByFarmerId(this.farmerId).subscribe(
//     //use the response to initialize the component properties
//   response=> {
//     this.farmerId=response.farmerId
//     this.farmerName=response.farmerName
//     this.farmerLocation=response.farmerLocation
//     this.farmerEmail=response.farmerEmail
//     this.assignment=response.assignment
  
//   })
  
// }

// deleteProduct(index){
//   this.assignment.splice(index,1)
// }

// addNewProduct(pproductId,pproductName,pdescription
//   ,pproductType,punitPrice){
//   if(isNaN(pproductId)){
//     this.isProductFormValid=false
//     this.invalidFormMessage="Product ID must be a number"
//   }
//   else if(pproductName.length<2){
//     this.isProductFormValid=false
//     this.invalidFormMessage="Product Name numst be greater then 2 characters"
//   }
//   else if(pdescription.length<12){
//   this.isProductFormValid=false
//     this.invalidFormMessage="Product Name numst be greater then 12 characters"
//   }
//   else if(pproductType.length<2){
//     this.isProductFormValid=false
//       this.invalidFormMessage="Product Name numst be greater then 2 characters"
//     }
//   else if(isNaN(punitPrice)){
//       this.isProductFormValid=false
//         this.invalidFormMessage="Product Name numst be greater then 2 characters"
//       }
//   else{
//   this.assignment.push({
//     productId:pproductId,productName:pproductName
//     ,description:pdescription, productType:pproductType,
//     unitPrice:punitPrice
//   })
//   this.isProductFormVisible=false
//   this.isProductFormValid=true
//   this.invalidFormMessage=""
// }
// }

// toggleEdits(){
//   this.isEditable = !this.isEditable
//   this.updateFarmDetails()
//   this.loadAllProducts
// }

// loadAllProducts(){
//   this.farmSvc.loadAllProductsFromServer().
//   subscribe(
//   response => {
//     this.allProducts=response}
//   )
// }

//   updateSelection(productId){
//     this.selectedproductId=productId
//   }

//   updateFarmDetails(){
//     this.farmSvc.updateFarmOnServer({
//       farmerId:this.farmerId, farmName: this.farmerName,
//       farmerLocation:this.farmerLocation, farmEmail:this.farmerEmail
//     }).subscribe(
//       response =>{
//         this.farmSvc.updateFarmProductOnServer
//         (this.farmerId,this.selectedproductId).subscribe(
//           responseProd=>{
//             this.fetchFarmFromService()
//           })})}

//   showProjectForm(){
//             this.isProductFormVisible=true
//             // load all projects from server
//             this.loadAllProjects()
//           }
          
//   updateSelectedProno(pproductId){
//             this.selectedproductId=pproductId
//           }
        
//   assignNewProject(){
//             this.farmSvc.assignProductToFarm(
//               this.farmerId,this.selectedproductId)
//               .subscribe(
//                 response => {
//                   this.fetchFarmFromService()
//                 }
//               )
//               this.isProductFormVisible=false
//           }
        
//   loadAllProjects(){
//             this.farmSvc.loadAllProductsFromServer()
//             .subscribe(
//               response =>{
//                 this.allProducts = response
//               }
//             )
//           }
//         }
  




