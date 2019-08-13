import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminhomeComponent } from "./adminhome/adminhome.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasketComponent } from './basket/basket.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DisplayAdminProductsComponent } from './display-admin-products/display-admin-products.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { DisplayandfindadminsComponent } from "./displayandfindadmins/displayandfindadmins.component";
import { EditFarmerComponent } from './edit-farmer/edit-farmer.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { LoginAdminComponent } from "./login-admin/login-admin.component";
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { MapApiComponent } from './map-api/map-api.component';
import { OrderItemsComponent } from './order-items/order-items.component';
// import { RegisterProductComponent } from './register-product/register-product.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { RegisterAdminComponent } from "./register-admin/register-admin.component";
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterproductComponent } from "./registerproduct/registerproduct.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterFarmerComponent,
    ProductsComponent,
    RegistercustomerComponent,
    OrdersComponent,
    OrderItemsComponent,
    LogindashboardComponent,
    LogincustomerComponent,
    LoginfarmerComponent,
    FarmerHomeComponent,
    DisplayProductsTableComponent,
    // added for basket
    BasketComponent,
    RegisterproductComponent,
    CustomerHomeComponent,
    EditFarmerComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    AdminhomeComponent,
    DisplayandfindadminsComponent,
    MapApiComponent,
    DisplayAdminProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyC_JQ1Hvh5IGwVlzQiW-22Ee5JtR08aM4Y'
    })
    //added for basket
  ],

  // changed from providers: [] to the below for basket
  providers: [ProductService],
  bootstrap: [AppComponent],
  exports: [CustomerHomeComponent]
})
export class AppModule {



}
