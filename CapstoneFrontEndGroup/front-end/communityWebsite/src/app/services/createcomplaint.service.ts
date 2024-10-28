import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Complaint } from "../Models/Complaint";


@Injectable({
    providedIn: 'root'
  })
export class CreatecomplaintService{
    private apiUrl='http://localhost:5114/complaint';
    constructor(private http:HttpClient){}
    addComplaint(complaint:Complaint):Observable<Complaint>{
        const token=localStorage.getItem('token');
        const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
        return this.http.post<Complaint>(this.apiUrl,complaint,{headers});
    }
}