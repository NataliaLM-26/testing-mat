import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Test3Service {
  private api_url= 'https://apicv-service-natalialm-26.cloud.okteto.net/3a_test2';
  
  constructor(private http:HttpClient) {}
 
  getData():Observable<any>{
    return this.http.get<any>(this.api_url).pipe(retry(1),catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error code: ${error.status}\n Message: ${error.message}';
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
