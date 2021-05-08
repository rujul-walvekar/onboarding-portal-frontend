import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  getAdmins(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}`+`/recruiters`);
  }

  addAdmin(admin: Admin): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+`/recruiter`, admin);
  }
  getAdminByAemail(aemail: string): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}`+`/recruiter`+`/${aemail}`);
  }
  updateAdmin(aemail: string, admin: Admin): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+`/recruiter`, admin);
  }
  deleteAdmin(aemail: string): Observable<any>{
    return this.httpClient.delete(`${this.baseURL}`+`/recruiter`+ `/${aemail}`);
  }
}
