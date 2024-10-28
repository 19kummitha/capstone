import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: LoginService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isLoggedIn()) {
      const userRole = this.authService.getUserRole();
      const requiredRole = route.data['role'] as string;

      if (userRole === requiredRole) {
        return true;
      } else {
        this.authService.redirectBasedOnRole(userRole);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}