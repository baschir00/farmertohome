import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { from } from 'rxjs';
import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//implements OnInit added for basket
export class AppComponent implements OnInit {
  //added for basket
  ngOnInit(){}

  }



