import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { LoginComponent } from './login/login.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';

const routes: Routes = [
  { path: 'registerFarmer', component: RegisterFarmerComponent },
  { path: 'registerCustomer', component: RegistercustomerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'products', component: DisplayProductsTableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
