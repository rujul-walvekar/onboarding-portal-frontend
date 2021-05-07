import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { Onboardee } from './onboardee';

@Injectable({
  providedIn: 'root'
})
export class OnboardService {
  private baseURL = "http://localhost:8080";
  constructor(private httpClient: HttpClient) { }

  getOnboardeeList(): Observable<Onboardee[]>{
    return this.httpClient.get<Onboardee[]>(`${this.baseURL}`+`/onboardees`);
  }

  addOnboardee(onboardee: Onboardee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+`/addNewOnboardee`, onboardee);
  }

  getOnboardeeByEmailID(emailID: string): Observable<Onboardee>{
    return this.httpClient.get<Onboardee>(`${this.baseURL}`+`/onboardee`+`/${emailID}`);
  }

  updateOnboardee(emailID: string, onboardee: Onboardee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+`/updateOnboardee`+`/${emailID}`, onboardee);
  }


}
