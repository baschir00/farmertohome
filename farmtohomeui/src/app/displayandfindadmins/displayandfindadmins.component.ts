import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';
import { Farmer } from '../farmer';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-displayandfindadmins',
  templateUrl: './displayandfindadmins.component.html',
  styleUrls: ['./displayandfindadmins.component.css']
})
export class DisplayandfindadminsComponent implements OnInit {

  isInEditMode: boolean;
  admins: Admin[]
  editedId: number;
  showAdmin: boolean;
  buttonName: any;
  farmers: Farmer[];

  constructor(private admSvc: AdminServiceService, private farmSvc: FarmService) {
    this.showAdmin = false;
    this.cancelAdminEdit();
    this.buttonName = "Show Admins"
  }

  ngOnInit() {
    this.loadAdmins();
    this.loadFarmers()
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
  }

  toggleAdmin() {
    this.showAdmin = !this.showAdmin;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.showAdmin)
      this.buttonName = "Hide Admins";
    else
      this.buttonName = "Show Admins";
  }

  loadFarmers() {
    this.farmSvc.loadAllFarmersFromSever().subscribe(response => {

      this.farmers = response;
    }

    )

  }

  deleteFarmer(farmerId) {
    this.farmSvc.deleteFarmerFromServer(farmerId).subscribe(() => {
      this.loadFarmers()
    })

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




}
