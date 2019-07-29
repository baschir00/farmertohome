import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {

  farmId: number
  farmName: string
  farmLocation:string
  farmEmail: string




  constructor() { }

  ngOnInit() {
  }

}
