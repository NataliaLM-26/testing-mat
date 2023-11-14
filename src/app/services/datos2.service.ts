import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Datos2Service {
  private api_devURL ='https://apicv-service-natalialm-26.cloud.okteto.net/dev_hours';

  constructor(private http: HttpClient) { }

  getData():Observable<number[]>{
    return this.http.get<any>(this.api_devURL);
  }
}
