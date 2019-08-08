import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { LoginComponent } from './login/login.component';
import { CustomernavbarComponent } from './customernavbar/customernavbar.component';
import { CustomerBasketComponent } from './customer-basket/customer-basket.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { CustomersComponent } from './customers/customers.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { AppRoutingModule} from './app-routing.module';
// import { RegisterProductComponent } from './register-product/register-product.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import { BasketComponent } from './basket/basket.component';
import { ProductService } from './product.service';






@NgModule({
  declarations: [
    AppComponent,
    RegisterFarmerComponent,
    ProductsComponent,
    ProductTileComponent,
    RegistercustomerComponent,
    LoginComponent,
    CustomernavbarComponent,
    CustomerBasketComponent,
    CustomerDetailsComponent,
    OrdersComponent,
    OrderItemsComponent,
    CustomersComponent,
    RegisterproductComponent,
    DisplayProductsTableComponent,
    //added for basket
    BasketComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    //added for basket


  ],

  // changed from providers: [] to the below for basket
  providers: [ProductService],

  bootstrap: [AppComponent]
})
export class AppModule {



}
