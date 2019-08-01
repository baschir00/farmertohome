import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { RegisterfarmerComponent } from './registerfarmer/registerfarmer.component';
import { LoginComponent } from './login/login.component';
import { CustomernavbarComponent } from './customernavbar/customernavbar.component';
import { CustomerBasketComponent } from './customer-basket/customer-basket.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { CustomersComponent } from './customers/customers.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterProductComponent } from './register-product/register-product.component';






@NgModule({
  declarations: [
    AppComponent,
    FarmerComponent,
    ProductsComponent,
    ProductTileComponent,
    RegistercustomerComponent,
    RegisterfarmerComponent,
    LoginComponent,
    CustomernavbarComponent,
    CustomerBasketComponent,
    CustomerDetailsComponent,
    OrdersComponent,
    OrderItemsComponent,
    CustomersComponent,
    RegisterProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 


}
