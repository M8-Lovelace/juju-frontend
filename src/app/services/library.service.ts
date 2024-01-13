import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Errors } from '@models/error.model';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  public http = inject(HttpClient);
  private readonly API = environment.API;
  private token: any = sessionStorage.getItem('token');

  public createBook(book: any): Observable<any | Errors> {
    return this.http
      .post<any | Errors>(`${this.API}/book`, book, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.handleError));
  }

  public getBookById(id: any): Observable<any | Errors> {
    return this.http
      .get<any | Errors>(`${this.API}/book/${id}`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.handleError));
  }

  public getBooks(): Observable<any | Errors> {
    return this.http
      .get<any | Errors>(`${this.API}/book`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.handleError));
  }

  public deleteBook(id: any): Observable<any | Errors> {
    return this.http
      .delete<any | Errors>(`${this.API}/book/${id}`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.handleError));
  }

  public updateBook(book: any): Observable<any | Errors> {
    return this.http
      .put<any | Errors>(`${this.API}/book/${book._id}`, book, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.handleError));
  }

  public searchBookByTitle(title: any): Observable<any | Errors> {
    return this.http
      .get<any | Errors>(`${this.API}/book/search/${title}`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.handleError));
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
