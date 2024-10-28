import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AddServiceProviderDto } from "../Models/serviceproviderdto";

@Injectable({
    providedIn: 'root'
})
export class ViewserviceService {
    private apiUrl = 'http://localhost:5114/ServiceProvider';

    constructor(private http: HttpClient) {}

    getAllServiceProviders(): Observable<{ service: AddServiceProviderDto[] }> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<{ service: AddServiceProviderDto[] }>(`${this.apiUrl}`, { headers });
    }
}
