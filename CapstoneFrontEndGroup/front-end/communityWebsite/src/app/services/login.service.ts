import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap, catchError, of } from 'rxjs';
import { LoginResponse } from '../Models/loginresponse';
import { LoginUser } from '../Models/LoginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:5001/api/auth/login';
  private tokenKey = 'token';
  private roleKey = 'userRole';

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  login(credentials: LoginUser): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseUrl, credentials)
      .pipe(
        tap(response => this.handleLoginSuccess(response)),
        catchError(this.handleError)
      );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.roleKey);
    this.router.navigate(['/login']);
  }

  getUserRole(): string | null {
    return localStorage.getItem(this.roleKey);
  }

  private handleLoginSuccess(response: LoginResponse): void {
    if (response?.value?.token) {
      localStorage.setItem(this.tokenKey, response.value.token);
      const role = response.value.roles[0];
      localStorage.setItem(this.roleKey, role);
      this.redirectBasedOnRole(role);
    }
  }

  private handleError(error: any): Observable<never> {
    console.error('Login failed', error);
    throw error;
  }

  redirectBasedOnRole(role: string | null): void {
    if (!role) {
      this.router.navigate(['/login']);
      return;
    }

    switch (role) {
      case 'Admin':
        this.router.navigate(['/dashboard/admin']);
        break;
      case 'ServiceProvider':
        this.router.navigate(['/dashboard/serviceprovider']);
        break;
      case 'User':
        this.router.navigate(['/dashboard/resident']);
        break;
      default:
        this.router.navigate(['/login']);
    }
  }
}