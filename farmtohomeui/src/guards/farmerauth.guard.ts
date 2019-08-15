import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDetailsService } from '../app/login-details.service';
import { RegisterFarmerComponent } from '../app/register-farmer/register-farmer.component';

@Injectable({
  providedIn: 'root'
})
export class FarmerauthGuard implements CanActivate, CanActivateChild,CanDeactivate<RegisterFarmerComponent> {
  constructor(private lgnSvc:LoginDetailsService){}
  canDeactivate(component: RegisterFarmerComponent,): boolean {
    if (component.addFarmer ) {
         confirm('Confirm all your changes before exiting');
        
    }

    return true;
}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.lgnSvc.isFarmer() ){
        return true;
      }
      else{
        
         confirm("ONLY FARMER CAN ACCESS")
         return false;
        
      }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}
