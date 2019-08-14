import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDetailsService } from '../app/login-details.service';
import { RegistercustomerComponent } from '../app/registercustomer/registercustomer.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerauthGuard implements CanActivate, CanActivateChild,CanDeactivate<RegistercustomerComponent> {

  constructor(private lgnSvc:LoginDetailsService){}

  canDeactivate(component: RegistercustomerComponent,): boolean {
    if (component.addCustomer ) {
        confirm('Are you sure you want to discard your changes?');
       
    }

    return true;
}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if( this.lgnSvc.isAdmin() ){
       confirm("No Admin/Farmer Access")
        return false;
      }
      if( this.lgnSvc.isFarmer() ){
        confirm("No Admin/Farmer Access")
         return false;
       }
      else{
       
        return  true
      
        
      }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
