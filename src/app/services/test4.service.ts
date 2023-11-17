import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test4Service {
  private api_url= 'https://apicv-service-natalialm-26.cloud.okteto.net/3a_test4';
  
  constructor(private http:HttpClient) {}
  
  getData():Observable<any>{
    /* return this.http.get<any>(this.api_url).pipe(retry(1),catchError(this.handleError)); */
      return this.http.get<any>(this.api_url);
  }

 /*  handleError(error: any) {
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
