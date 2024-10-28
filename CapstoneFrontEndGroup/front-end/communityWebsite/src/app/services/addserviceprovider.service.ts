import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddServiceProviderDto } from '../Models/serviceproviderdto';

@Injectable({
  providedIn: 'root'
})
export class AddserviceproviderService {
  private apiUrl = 'http://localhost:5114/register-service';
  constructor(private http: HttpClient) { }
  
  addServiceProvider(serviceprovider: AddServiceProviderDto): Observable<AddServiceProviderDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<AddServiceProviderDto>(this.apiUrl, serviceprovider, { headers });
  }
}
