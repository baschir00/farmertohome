import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';
import { Farmer } from '../farmer';
import { FarmService } from '../farm.service';
import { CustomerService } from "../customer.service";
import { Customer } from "../customer";

@Component({
  selector: 'app-displayandfindadmins',
  templateUrl: './displayandfindadmins.component.html',
  styleUrls: ['./displayandfindadmins.component.css']
})
export class DisplayandfindadminsComponent implements OnInit {

  isInEditMode: boolean;
  admins: Admin[];
  editedId: number;
  showAdmin: boolean;
  buttonName1: any;
  buttonName2: any;
  buttonName3: any;
  farmers: Farmer[];
  showFarmer:boolean;
  showCustomer:boolean;
  customer:Customer[];

  constructor(private admSvc: AdminServiceService, private farmSvc: FarmService, private custSvc: CustomerService) {
    this.showAdmin = false;
    this.cancelAdminEdit();
    this.buttonName1 = "Show Admins"

    this.showFarmer = false;
    this.cancelFarmerEdit();
    this.buttonName2 = "Show Farmers"

    this.showCustomer = false;
    this.cancelCustomerEdit();
    this.buttonName3 = "Show Customers"
  }

  ngOnInit() {
    this.loadAdmins();
    this.loadFarmers();
    this.loadCustomers();
  }


  // -------------admin edits---------------------------
  toggleAdmin() {
    this.showAdmin = !this.showAdmin;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showAdmin)
      this.buttonName1 = "Hide Admins";
    else
      this.buttonName1 = "Show Admins";
  }

  loadAdmins() {
    this.admSvc.loadAllAdminsFromSever().subscribe(resp => {
      this.admins = resp;
    })
  }

  deleteAdmin(adminId) {
    this.admSvc.deleteAdmin(adminId).subscribe(() => {
      this.loadAdmins()
    })
  }

  cancelAdminEdit() {
    this.isInEditMode = false;
    this.editedId = -1;
  }

  editAdmin(admin: Admin) {
    this.isInEditMode = true;
    this.editedId = admin.adminId;
  }

  saveAdmin(admin: Admin) {
    this.isInEditMode = false;
    this.editedId = -1;
    this.admSvc.updateAdminOnServer(admin).subscribe( () =>  {
      this.loadAdmins();
    });
  }

  //-----------------------------------------

  //--------Farmer edit-------------------------

  toggleFarmer() {
    this.showFarmer = !this.showFarmer;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showFarmer)
      this.buttonName2 = "Hide Farmers";
    else
      this.buttonName2 = "Show Farmers";
  }

  cancelFarmerEdit() {
    this.isInEditMode = false;
    this.editedId = -1;
  }

  deleteFarmer(farmerId) {
    this.farmSvc.deleteFarmerFromServer(farmerId).subscribe(() => {
      this.loadFarmers()
    })
  }

  editFarmer(farmer: Farmer) {
    this.isInEditMode = true;
    this.editedId = farmer.farmerId;
  }

  saveFarmer(farmer: Farmer) {
    this.isInEditMode = false;
    this.editedId = -1;
    this.farmSvc.updateFarmOnServer(farmer).subscribe( () =>  {
      this.loadFarmers();
    });
  }

  loadFarmers() {
    this.farmSvc.loadAllFarmersFromSever().subscribe(response => {
      this.farmers = response;
    })
  }

  //-------------Customer editable ---------------------------


  toggleCustomer() {
    this.showCustomer = !this.showCustomer;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showCustomer)
      this.buttonName3 = "Hide Customers";
    else
      this.buttonName3 = "Show Customers";
  }

  loadCustomers() {
    this.custSvc.loadAllCustomerFromSever().subscribe(resp => {
      this.customer = resp;
    })
  }

  saveCustomer(customer: Customer) {
    this.isInEditMode = false;
    this.editedId = -1;
    this.custSvc.updateCustomerOnServer(customer).subscribe( () =>  {
      this.loadCustomers();
    });
  }

  deleteCustomer(customerId) {
    this.custSvc.deleteCustomer(customerId).subscribe(() => {
      this.loadCustomers()
    })
  }

  cancelCustomerEdit() {
    this.isInEditMode = false;
    this.editedId = -1;
  }

  editCustomer(customer: Customer) {
    this.isInEditMode = true;
    this.editedId = customer.customerId;
  }
}
