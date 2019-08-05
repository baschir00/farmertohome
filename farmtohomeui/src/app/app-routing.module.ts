import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { LoginComponent } from './login/login.component';
import { FarmComponent } from './farm/farm.component';
import { CustomersComponent } from './customers/customers.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';

const routes: Routes = [
{path: 'registerFarmer', component:RegisterFarmerComponent},
{path: 'registerCustomer', component:RegistercustomerComponent},
{path: 'login',component:LoginComponent},
{path: 'farm',component:FarmComponent},
{path: 'customers', component:CustomersComponent},
{path: 'loginDashBoard', component:LogindashboardComponent},
{path: 'loginCustomer', component:LogincustomerComponent},
{path: 'loginFarmer', component:LoginfarmerComponent}


];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
