import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterResponse } from '../Models/registerresponse';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl='http://localhost:5001/api/auth/register';
  constructor(private http:HttpClient) { }
  register(username: string, passwordHash: string,email:string,FlatNo:string,Name:string,PhoneNumber:string): Observable<RegisterResponse> {
    console.log(username,email,Name,passwordHash,PhoneNumber,FlatNo)
    return this.http.post<RegisterResponse>(this.apiUrl, { username, passwordHash ,email,FlatNo,Name,PhoneNumber});
  }
}
