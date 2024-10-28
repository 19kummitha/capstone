import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResidentDto } from '../Models/residentDto';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {
  private apiUrl = 'http://localhost:5114/resident';
  constructor(private http: HttpClient) {}

  getAllResidents(): Observable<{residents:ResidentDto[]}> {
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<{residents:ResidentDto[]}>(this.apiUrl,{headers});
  }
  deleteResident(residentId: string): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.apiUrl}/${residentId}`, { headers });
  }

}

