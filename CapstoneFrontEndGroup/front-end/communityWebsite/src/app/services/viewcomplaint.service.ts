import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from '../Models/Complaint';

@Injectable({
  providedIn: 'root'
})
export class ViewcomplaintService {
  private apiUrl='http://localhost:5114/admin/complaints/';
  private apiUrl1='http://localhost:5114/complaints';
  private apiUrl2='http://localhost:5114/complaints'
  constructor(private http:HttpClient) { }
  getComplaints(residentId?: string): Observable<Complaint[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = residentId ? `${this.apiUrl}/${residentId}` : this.apiUrl;
    return this.http.get<Complaint[]>(url, { headers });
  }
  deleteComplaint(complaintId: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl1}/${complaintId}`;
    return this.http.delete<void>(url, { headers });
  }
  updateComplaintStatus(complaintId: number, status: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl2}/${complaintId}/status`;
    return this.http.put<void>(url, status, { headers });
  }
}
