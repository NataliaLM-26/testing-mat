import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test4Service {
  private api_url= 'https://apicv-service-natalialm-26.cloud.okteto.net/3a_test4';
  
  constructor(private http:HttpClient) {}
  
  getData():Observable<number[]>{
    return this.http.get<any[]>(this.api_url);
  }
}
