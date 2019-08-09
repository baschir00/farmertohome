import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Farmer } from './farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  rootURL: string;

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:5980/farmer";
  }

  findFarmByFarmerId(farmerId): Observable<Farmer> {
    return this.httpsvc.get<Farmer>(this.rootURL + "/find/" + farmerId);
  }



  registerFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword) {
    console.log('Registering farmer : registerFarmer');

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    // TODO:
    const reqBody = "farmerName=" + farmerName + "&farmerLocation=" + farmerLocation
      + "&farmerEmail=" + farmerEmail  + "&farmerPassword=" + farmerPassword;

    console.log(reqBody);

    return this.httpsvc.post<Farmer>(
      this.rootURL + "/register", reqBody, httpOptions);
  }

  updateFarmOnServer(farm): Observable<Farmer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    const reqBody = "farmerId=" + farm.farmerId + "&farmName=" +
      farm.farmName + "&farmLocation=" + farm.farmLocation +
      "&farmEmail" + farm.farmEmail;
    // post(URL,body,httpOptionswithHeaders)
    return this.httpsvc.post<Farmer>(
      this.rootURL + "/register", reqBody, httpOptions)
  }

  loadAllProductsFromServer(): Observable<Product[]> {
    // return this.httpsvc.get<Product[]>(
    //   "http://localhost:5980/Product/list")
    return this.httpsvc.get<Product[]>(this.rootURL + "/list");
  }

  assignProductToFarm(farmerId, productId):
    Observable<Product> {
    console.log("assignProductToFarm", farmerId, productId);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    const reqBody = "farmerId=" + farmerId + "&productId=" + productId
    return this.httpsvc.post<Product>(
      this.rootURL + "/assign/product", reqBody, httpOptions);
  }

  updateFarmProductOnServer(farmerId, productId)
    : Observable<Farmer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    const reqBody = "farmerId=" + farmerId + "&productId" + productId;
    return this.httpsvc.post<Farmer>(
      this.rootURL + "/assign/product",
      reqBody, httpOptions
    );
  }

}
