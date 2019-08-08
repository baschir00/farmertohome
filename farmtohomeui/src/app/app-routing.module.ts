import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { LoginComponent } from './login/login.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: 'registerFarmer', component: RegisterFarmerComponent },
  { path: 'registerProduct', component: RegisterproductComponent },
  { path: 'products', component: DisplayProductsTableComponent },
  { path: 'registerCustomer', component: RegistercustomerComponent },
  { path: 'login', component: LoginComponent },
  //added for basket
  { path: '', component: DisplayProductsTableComponent},
 //{ path: 'products', component: ProductsComponent },
  { path: 'basket', component: BasketComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
//added for basket

export class AppRoutingModule {}
