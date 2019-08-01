import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
<<<<<<< HEAD
import { ProductSearchComponent } from './product-search/product-search.component';
=======
import { RegisterProductComponent } from './register-product/register-product.component';
>>>>>>> refs/remotes/origin/master

@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    ProductsComponent,
    CustomersComponent,
    ProductTileComponent,
    RegistercustomerComponent,
<<<<<<< HEAD
    ProductSearchComponent
=======
    RegisterProductComponent
>>>>>>> refs/remotes/origin/master
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
