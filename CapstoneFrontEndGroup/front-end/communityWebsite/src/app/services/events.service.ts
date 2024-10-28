import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventDto } from '../Models/eventDto';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:5114';  
  constructor(private http: HttpClient) { }

  createEvent(event: EventDto): Observable<EventDto> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<EventDto>(`${this.apiUrl}/createevent`, event, { headers });
  }

  getEvents(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/getevents`, { headers });
  }

  deleteEvent(id: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${this.apiUrl}/deleteevent/${id}`, { headers });
  }
  updateEvent(event: Event): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.apiUrl}/events`, event, { headers });
  }

  
}
