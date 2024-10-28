import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestServiceDto } from '../Models/requestService';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private baseUrl = 'http://localhost:5114'; // Adjust the base URL as needed

  constructor(private http: HttpClient) { }

  createRequest(request: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<any>(`${this.baseUrl}/service/request`, request, { headers });
  }
  getAllRequests():Observable<{request:RequestServiceDto[]}>{
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<{request:RequestServiceDto[]}>(`${this.baseUrl}/resident/requestService`,{headers});
  }
}
