import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private hardcodedAuthenticaionService : HardcodedAuthenticationService,
    private router : Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if(this.hardcodedAuthenticaionService.isUserLoggedIn())
        
    return true;
      this.router.navigate(['login'])
    return false;
  }
}
