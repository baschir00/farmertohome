import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { LoginDetailsService } from '../login-details.service';

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
  }

  ngOnInit() {
  }

  // Login with farmer details form UI form
  loginFarmer() {
    console.log('Authenicating Farmer');
    this.loginSvc.loginFarmer(this.farmerLoginDetails).subscribe(
      response => {
        // If login unsuccessful display the login failure message
        if (response.status !== 200) {
          console.log('Authenication failure');
          this.incorrectUserDetailsMessage = 'invalid user credentials';
          this.isInvalidLogin = true;

        // If login successful then save responce and nav to farmer hone page
        } else {
          console.log('Authenication Success');
          console.log(response.body);
          this.loginDetails.userDetails = response.body;
          this.loginDetails.userDetails = response.body;
          this.router.navigate(['/farmerhome']);
        }
      }
    );
  }
}



