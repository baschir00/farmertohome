import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { LoginComponent } from './login/login.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';

const routes: Routes = [
  { path: 'registerFarmer', component: RegisterFarmerComponent },
  { path: 'registerProduct', component: RegisterproductComponent },
  { path: 'products', component: DisplayProductsTableComponent },
  { path: 'registerCustomer', component: RegistercustomerComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
