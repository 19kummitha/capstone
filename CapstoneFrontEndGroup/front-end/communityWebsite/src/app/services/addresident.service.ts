import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddResidentDto } from '../Models/addresidentdto';

@Injectable({
  providedIn: 'root'
})
export class AddresidentService {
  private apiUrl = 'http://localhost:5114/register';
  constructor(private http:HttpClient) { }
  addResident(resident: AddResidentDto): Observable<AddResidentDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<AddResidentDto>(this.apiUrl, resident, { headers });
  }
}
