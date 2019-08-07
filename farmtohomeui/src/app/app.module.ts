import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerBasketComponent } from './customer-basket/customer-basket.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomernavbarComponent } from './customernavbar/customernavbar.component';
import { CustomersComponent } from './customers/customers.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { FarmComponent } from './farm/farm.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { ProductsComponent } from './products/products.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterFarmerComponent,
    ProductsComponent,
    ProductTileComponent,
    RegistercustomerComponent,
    CustomernavbarComponent,
    CustomerBasketComponent,
    CustomerDetailsComponent,
    OrdersComponent,
    OrderItemsComponent,
    CustomersComponent,
    FarmComponent,
    LogindashboardComponent,
    LogincustomerComponent,
    LoginfarmerComponent,
    FarmerHomeComponent,
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
