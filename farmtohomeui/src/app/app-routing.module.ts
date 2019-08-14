import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { BasketComponent } from './basket/basket.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DisplayAdminProductsComponent } from './display-admin-products/display-admin-products.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { DisplayandfindadminsComponent } from './displayandfindadmins/displayandfindadmins.component';
import { EditFarmerComponent } from './edit-farmer/edit-farmer.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { MapApiComponent } from './map-api/map-api.component';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';



const routes: Routes = [
  { path: 'registerFarmer', component: RegisterFarmerComponent },
  { path: 'registerCustomer', component: RegistercustomerComponent },
  { path: 'registerProduct', component: RegisterproductComponent },
  { path: 'registerAdmin', component: RegisterAdminComponent },
  { path: 'loginDashBoard', component: LogindashboardComponent },
  { path: 'loginCustomer', component: LogincustomerComponent },
  { path: 'loginFarmer', component: LoginfarmerComponent },
  { path: 'loginAdmin', component: LoginAdminComponent },
  { path: 'farmerhome', component: FarmerHomeComponent },
  { path: 'customerhome', component: CustomerHomeComponent },
  { path: 'adminhome', component: AdminhomeComponent },
  { path: 'products', component: DisplayProductsTableComponent },
  { path: 'editFarmer', component: EditFarmerComponent },
  { path: 'registerCustomer', component: RegistercustomerComponent },
  { path: 'registerAdmin', component: RegisterAdminComponent },
  { path: 'mapApi', component:  MapApiComponent},
  { path: 'adminProducts', component: DisplayAdminProductsComponent},
  { path: '', component: DisplayProductsTableComponent},
  { path: 'displayAdmins', component: DisplayandfindadminsComponent },
  { path: 'basket', component: BasketComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// added for basket

export class AppRoutingModule { }
