import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Datos1Service {
  private api_proxyURL ='https://apicv-service-natalialm-26.cloud.okteto.net/proxy_size';
  
  constructor(private http: HttpClient) { }

  getData():Observable<number[]>{
    return this.http.get<any>(this.api_proxyURL);
  }
}
