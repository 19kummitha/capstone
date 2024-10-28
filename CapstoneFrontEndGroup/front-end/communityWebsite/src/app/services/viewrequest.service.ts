import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RequestServiceDto } from "../Models/requestService";

@Injectable({
    providedIn: 'root'
  })
export class ViewrequestService{
    private apiUrl='http://localhost:5114/Service/requests';
    constructor(private http:HttpClient){}
    getAllServiceRequests(residentId?: string): Observable<RequestServiceDto[]> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        const url = residentId ? `${this.apiUrl}/${residentId}` : this.apiUrl;
        return this.http.get<RequestServiceDto[]>(url, { headers });
    }
    
}