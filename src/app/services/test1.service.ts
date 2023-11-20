import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Test1Service {
   api_url= 'https://apicv-service-natalialm-26.cloud.okteto.net/3a_test1';
  
  constructor(private http:HttpClient) {}
  /* httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  }; */
  
  getData():Observable<any>{
    /* (this.api_url,this.httpOptions).pipe(retry(1),catchError(this.handleError)); */
    return this.http.get<any>(this.api_url);
  }
  

  /* handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error code: ${error.status}\n Message: ${error.message}';
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  } */
}
