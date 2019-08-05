import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { LoggedinuserComponent } from '../loggedinuser/loggedinuser.component';

@Component({
  selector: 'app-loginfarmer',
  templateUrl: './loginfarmer.component.html',
  styleUrls: ['./loginfarmer.component.css']
})




export class LoginfarmerComponent implements OnInit {

  incorrectUserDetailsMessage:String
  isInvalidLogin:boolean

  farmerLoginDetails:{
    farmerEmail:string
    farmerPassword:string
  }



  constructor(private loginSvc: LoginService ) {

    this.incorrectUserDetailsMessage="",
    this.isInvalidLogin=false


   }

  



  ngOnInit() {
  }



  loginFarmer() {
    console.log("Authenicating Farmer")
    this.loginSvc.loginFarmer(this.farmerLoginDetails).subscribe(
      response => { 
        if(response.status !=200) {
              console.log("Authenication failure")
              this.incorrectUserDetailsMessage= "invalid user credentials"
              this.isInvalidLogin=true
        }

        else {
          console.log("Authenication Success")
          LoggedinuserComponent.tempUserInfo=response.body
        }



      }
    )

    
  }
}
  


