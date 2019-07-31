import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  } from './farmer/farmer.component';
import { RegisterfarmerComponent } from './registerfarmer/registerfarmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';

const routes: Routes = [

{path: 'registerFarmer', component:RegisterfarmerComponent},
{path:'registerCustomer', component:RegistercustomerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    RegisterfarmerComponent
  ]

})
export class AppRoutingModule { }
