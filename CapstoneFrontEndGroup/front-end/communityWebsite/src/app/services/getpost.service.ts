import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetPostService {

  private baseUrl = 'http://localhost:5114'; 

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<any[]> {
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders().set('Authorization',`Bearer ${token}`);
    return this.http.get<any[]>(`${this.baseUrl}/getposts`,{headers});
  }
  deletePost(postId: number): Observable<void> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<void>(`${this.baseUrl}/deletepost/${postId}`, { headers });
  }
}
