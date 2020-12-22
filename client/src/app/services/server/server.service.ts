import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { ILoginInput, IRegisterInput } from 'src/interfaces/login';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private readonly baseEndpoint: string = "http://localhost:3006";
  private readonly authenticationEndpoint: string = `${this.baseEndpoint}/api/v1/authentication`;

  constructor(private http: HttpClient) { }

  public login(loginInput: ILoginInput) {
    return this.http.post<boolean>(`${this.authenticationEndpoint}/login`, loginInput)
      .pipe(
        catchError(this.handleError)
      )
  }

  public register(registerInput: IRegisterInput): Observable<boolean> {
    return this.http.post<boolean>(`${this.authenticationEndpoint}/register`, registerInput)
      .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
