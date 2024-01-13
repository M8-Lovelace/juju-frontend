import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Errors } from '@models/error.model';
import { User } from '@models/user.model';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public http = inject(HttpClient);
  private readonly API = environment.API;

  public createUser(user: User): Observable<User | Errors> {
    return this.http.post<User | Errors>(`${this.API}/user`, user).pipe(catchError(this.handleError));
  }

  public loginUser(user: User): Observable<User | Errors> {
    return this.http.post<User | Errors>(`${this.API}/user/login`, user).pipe(catchError(this.handleError));
  }

  public handleError(error: HttpErrorResponse): Observable<Errors> {
    return of({
      errors: [
        {
          msg: error.message
        }
      ]
    } as Errors);
  }
}
