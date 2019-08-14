import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginDetailsService } from '../app/login-details.service';
import { RegisterAdminComponent } from '../app/register-admin/register-admin.component';

@Injectable({
  providedIn: 'root'
})
export class AdminauthGuard implements CanActivate, CanActivateChild, CanLoad, CanDeactivate<RegisterAdminComponent> {
  constructor(private lgnSvc:LoginDetailsService){}

  canDeactivate(component: RegisterAdminComponent,): boolean {
    if (component.addAdmin ) {
        confirm('Are you sure you want to discard your changes?');
       
    }

    return true;
}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.lgnSvc.isAdmin() ){
        return true;
      }
      else{
       
        confirm("Invalid Request ADMINS ONLY")
        return false;
        
      }
      
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.lgnSvc.isAdmin()){
        return true;
      }
      else{
        confirm("Nice try You are not a ADMIN!!!! Idiot")
        return false;
       

      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
