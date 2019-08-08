import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { ProductsComponent } from './products/products.component';
import { BasketComponent } from './basket/basket.component';

const routes: Routes = [
  { path: 'registerFarmer', component: RegisterFarmerComponent },
  { path: 'registerCustomer', component: RegistercustomerComponent },
  { path: 'registerProduct', component: RegisterproductComponent },
  { path: 'loginDashBoard', component: LogindashboardComponent },
  { path: 'loginCustomer', component: LogincustomerComponent },
  { path: 'loginFarmer', component: LoginfarmerComponent },
  { path: 'farmerhome', component: FarmerHomeComponent },
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
