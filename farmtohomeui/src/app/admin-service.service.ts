import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = 'http://localhost:5980/admin';
  }

  findAdminById(adminId): Observable<Admin> {
    return this.httpsvc.get<Admin>(this.rootURL + '/find/' + adminId);
  }

  registerAdmin(adminUsername, adminPassword) {
    console.log('Registering admin : registerAdmin');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    // TODO:
    const reqBody = 'adminUsername=' + adminUsername + '&adminPassword=' + adminPassword;

    console.log(reqBody);

    return this.httpsvc.post<Admin>(
      this.rootURL + '/register', reqBody, httpOptions);
  }

  updateAdminOnServer(admin): Observable<Admin> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const reqBody = 'adminId=' + admin.adminId + '&adminUsername=' +
      admin.adminUsername + '&adminPassword' + admin.adminPassword;

    return this.httpsvc.post<Admin>(
      this.rootURL + '/register', reqBody, httpOptions);
  }

  loadAllAdminsFromSever(): Observable<Admin[]> {
    return this.httpsvc.get<Admin[]>(this.rootURL + '/list');
  }

  deleteAdmin(adminId): Observable<Admin> {

    return this.httpsvc.delete<Admin>(this.rootURL + '/delete/' + adminId);
  }

}
