import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Admin } from "./admin";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:5980/admin";
  }

  findAdminById(adminId): Observable<Admin> {
    return this.httpsvc.get<Admin>(this.rootURL + "/find/" + adminId);
  }

  registerAdmin(adminUsername, adminPassword) {
    console.log('Registering admin : registerAdmin');

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    // TODO:
    const reqBody = "adminUsername=" + adminUsername + "&adminPassword=" + adminPassword

    console.log(reqBody);

    return this.httpsvc.post<Admin>(
      this.rootURL + "/register", reqBody, httpOptions);
  }

  updateAdminOnServer(admin): Observable<Admin> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    const reqBody = "adminrId=" + admin.adminId + "&adminUsername=" +
      admin.adminUsername + "&adminPassword" + admin.adminPassword;
    // post(URL,body,httpOptionswithHeaders)
    return this.httpsvc.post<Admin>(
      this.rootURL + "/register", reqBody, httpOptions)
  }

  loadAllAdminsFromSever(): Observable<Admin> {
    // [] ??
    return this.httpsvc.get<Admin>(this.rootURL + "/list");
  }

  deleteAdmin(adminId): Observable<Admin> {

    return this.httpsvc.delete<Admin>(this.rootURL +"/delete/" +adminId)
  }

 


}
