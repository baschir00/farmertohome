import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-displayandfindadmins',
  templateUrl: './displayandfindadmins.component.html',
  styleUrls: ['./displayandfindadmins.component.css']
})
export class DisplayandfindadminsComponent implements OnInit {

  admin: Admin

  constructor( private admSvc: AdminServiceService) { }

  ngOnInit() { 
    this.loadAdmins()
 

  }

loadAdmins() {
  this.admSvc.loadAllAdminsFromSever().subscribe(resp => {

    this.admin = resp;
  })
}

  deleteAdmin(adminId){

    this.admSvc.deleteAdmin(adminId).subscribe(() => {
      this.loadAdmins()
    })

 

  }




}
