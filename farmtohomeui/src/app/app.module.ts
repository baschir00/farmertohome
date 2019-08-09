import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductsTableComponent } from './display-products-table/display-products-table.component';
import { FarmerHomeComponent } from './farmer-home/farmer-home.component';
import { LogincustomerComponent } from './logincustomer/logincustomer.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { LoginfarmerComponent } from './loginfarmer/loginfarmer.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { RegisterFarmerComponent } from './register-farmer/register-farmer.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { RegisterproductComponent } from './registerproduct/registerproduct.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { EditFarmerComponent } from './edit-farmer/edit-farmer.component';






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
    RegisterproductComponent,
    CustomerHomeComponent,
    EditFarmerComponent,
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
  bootstrap: [AppComponent],
  exports: [CustomerHomeComponent]
})
export class AppModule {



}
