import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Response } from '@models/response.model';
import { Login, User } from '@models/user.model';
import { Observable, catchError } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private utilsService = inject(UtilsService);
  private readonly API = environment.API;

  public createUser(user: User): Observable<Response<User>> {
    return this.http.post<Response<User>>(`${this.API}/user`, user).pipe(catchError(this.utilsService.handleError));
  }

  public loginUser(user: User): Observable<Response<Login>> {
    return this.http
      .post<Response<Login>>(`${this.API}/user/login`, user)
      .pipe(catchError(this.utilsService.handleError));
  }
}
