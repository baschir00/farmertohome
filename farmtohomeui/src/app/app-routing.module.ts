import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';

const routes: Routes = [
{path: 'registerFarmer', component:RegisterFarmerComponent},
{path: '', component:RegistercustomerComponent}

];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}
