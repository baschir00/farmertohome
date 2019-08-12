import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  isAdminFormValid: boolean;
  invalidFormMessage: string;

  constructor(private adminSvc: AdminServiceService) { }

  ngOnInit() { }

  addAdmin(adminUsername, adminPassword) {
    adminUsername = adminUsername.value;
    adminPassword = adminPassword.value;
    console.log('Registering admin : addAdmin');
    console.log(adminUsername, adminPassword);

    if (adminUsername.length < 2) {
      this.isAdminFormValid = false;
      this.invalidFormMessage =
        'Admin Name must be greater then 2 characters';
    } else {

      this.adminSvc.registerAdmin(adminUsername, adminPassword)
        .subscribe(
          responseDep => {
            console.log('registered admin');

          }
        );

      this.isAdminFormValid = true;
      this.invalidFormMessage = '';
    }
  }
}
