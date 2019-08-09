import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from './product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CurrentFarmer } from './current-farmer';

@Injectable({
  providedIn: 'root'
})
export class FarmService {
  rootURL: string

  constructor(private httpsvc: HttpClient) {
    this.rootURL = "http://localhost:5980/farmer"
  }

  findFarmByFarmerId(farmerId): Observable<CurrentFarmer> {
    return this.httpsvc.get<CurrentFarmer>(this.rootURL + "/find/" + farmerId)
  }

  registerFarmer(farmerName, farmerLocation, farmerEmail, farmerPassword) {
    console.log('Registering farmer : registerFarmer');

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    };

    // TODO:
    var reqBody = "farmerName=" + farmerName + "&farmerLocation=" + farmerLocation
      + "&farmerEmail=" + farmerEmail// + "&farmerPassword=" + farmerPassword

    console.log(reqBody);

    return this.httpsvc.post<CurrentFarmer>(
      this.rootURL + "/register", reqBody, httpOptions);
  }

  updateFarmOnServer(farm): Observable<CurrentFarmer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    var reqBody = "farmerId=" + farm.farmerId + "&farmName=" +
      farm.farmName + "&farmLocation=" + farm.farmLocation +
      "&farmEmail" + farm.farmEmail
    // post(URL,body,httpOptionswithHeaders)
    return this.httpsvc.post<CurrentFarmer>(
      this.rootURL + "/register", reqBody, httpOptions)
  }

  loadAllProductsFromServer(): Observable<Product[]> {
    return this.httpsvc.get<Product[]>(
      "http://localhost:7700/Product/list")
  }

  assignProductToFarm(farmerId, productId):
    Observable<Product> {
    console.log("assignProductToFarm", farmerId, productId);
      
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    var reqBody = "farmerId=" + farmerId + "&productId=" + productId
    return this.httpsvc.post<Product>(
      this.rootURL + "/assign/product", reqBody, httpOptions)
  }

  updateFarmProductOnServer(farmerId, productId)
    : Observable<CurrentFarmer> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/x-www-form-urlencoded"
      })
    }
    var reqBody = "farmerId=" + farmerId + "&productId" + productId
    return this.httpsvc.post<CurrentFarmer>(
      this.rootURL + "/assign/product",
      reqBody, httpOptions
    )
  }

}
