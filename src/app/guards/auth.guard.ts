import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {}
/*export class AuthGuard implements CanActivate {
  
  constructor(public auth: AuthenticationService) {}

  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
} */
