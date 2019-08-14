import { Component, OnInit } from '@angular/core';
import { BasketService } from "./basket.service";
import { LoginDetailsService } from "./login-details.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//implements OnInit added for basket
export class AppComponent implements OnInit {
  //added for basket


  constructor(private loginSvc:LoginDetailsService , private basketSvc:BasketService, private router:Router){




  }

  ngOnInit(){


  }


    logout(){
      this.loginSvc.logout()
      this.basketSvc.clear();
      this.router.navigate(['/products'])

    }

  }



