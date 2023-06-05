import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RightGuardGuard implements CanActivate {

 constructor(private router: Router) {}

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const role = localStorage.getItem("role").length == 1 ? localStorage.getItem("role")[0] : localStorage.getItem("role");
      
    const { routeConfig } = route;                                             
    const { path } = routeConfig as Route;
                     
    if ((path?.includes("home")))
      return true;
                                                                                                 
    if ((path?.includes("dashboard") || path?.includes("cust-info")) && role === 'accountant') {
      return true;
    }
    
    if ((path?.includes("dashboard") || path?.includes("cust-info")) && role === 'inpection_cons') {
      return true;
    }

    if ((path?.includes("verify")    || path?.includes("doc")) && role === 'accountant') {

      this.router.navigateByUrl("/accessdenied");
      return false;
    }

    if ((path?.includes("verify")    || path?.includes("doc")) && role === 'inpection_cons') {
       return true;
    }

    return false;
    
  }


}
