import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DatosService {
  private api_proxyURL ='http://localhost:8080/proxy_size';
  /* private api_devURL ='http://localhost:8080/dev_hours'; */
  
  constructor(private http: HttpClient) { }

  getData():Observable<number[]>{
    return this.http.get<number[]>(this.api_proxyURL);
  }
}
