import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetailsService } from '../login-details.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginfarmer',
  templateUrl: './loginfarmer.component.html',
  styleUrls: ['./loginfarmer.component.css']
})

export class LoginfarmerComponent implements OnInit {

  // Bad login message and flag
  incorrectUserDetailsMessage: string;
  isInvalidLogin: boolean;

  // User input storage object for ngModle
  farmerLoginDetails: {
    farmerEmail: string
    farmerPassword: string
  };

  constructor(private loginSvc: LoginService, private loginDetails: LoginDetailsService, private router: Router) {
    // Defaults
    this.incorrectUserDetailsMessage = '';
    this.isInvalidLogin = false;
    this.farmerLoginDetails = {
      farmerEmail: '',
      farmerPassword: ''
    };
  }

  ngOnInit() {
  }

  // Login with farmer details form UI form
  loginFarmer() {
    console.log('Authenicating Farmer');
    this.loginSvc.loginFarmer(this.farmerLoginDetails)
      .subscribe(
        // If login success
        resp => {
          console.log(resp);
          // If login successful then save responce and nav to farmer hone page
          console.log('Authenication Success');
          this.loginDetails.loginFarmer(resp);
          this.router.navigate(['/farmerhome']);
        },
        // If login failure
        errorResp => {
          // If login unsuccessful display the login failure message
          console.log(errorResp);
          console.log('Authenication failure');
          this.incorrectUserDetailsMessage = 'invalid user credentials';
          this.isInvalidLogin = true;
        }
      );
  }
}



