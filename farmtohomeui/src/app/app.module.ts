import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomernavbarComponent } from './customernavbar/customernavbar.component';
import { CustomersComponent } from './customers/customers.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { LoginComponent } from './login/login.component';
import { OrderItemsComponent } from './order-items/order-items.component';
//import { CustomerBasketComponent } from './customer-basket/customer-basket.component';
//import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductsComponent } from './products/products.component';
// import { RegisterProductComponent } from './register-product/register-product.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterFarmerComponent,
    ProductsComponent,
    ProductTileComponent,
    RegistercustomerComponent,
    LoginComponent,
    CustomernavbarComponent,
    //CustomerBasketComponent,
   // CustomerDetailsComponent,
    OrdersComponent,
    OrderItemsComponent,
    CustomersComponent,
    RegisterproductComponent,
    DisplayProductsTableComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
   NgxPaginationModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 


}
