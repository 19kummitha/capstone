import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5114/createpost/'; 

  constructor(private http: HttpClient) { }

  createPost(formData: FormData): Observable<HttpEvent<any>> {
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.post<HttpEvent<any>>(this.apiUrl, formData, {
      reportProgress: true,
      headers:headers,
      observe: 'events'
    });
    
  }
}
