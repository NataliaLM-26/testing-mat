import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Datos2Service {
  private api_devURL ='http://localhost:8080/dev_hours';

  constructor(private http: HttpClient) { }

  getData():Observable<number[]>{
    return this.http.get<any>(this.api_devURL);
  }
}
