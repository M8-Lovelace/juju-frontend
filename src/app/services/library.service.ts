import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Book, BookById, Books } from '@models/book.model';
import { Response } from '@models/response.model';
import { Observable, catchError } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  public http = inject(HttpClient);
  public utilsService = inject(UtilsService);
  private readonly API = environment.API;
  private token: string = sessionStorage.getItem('token') ?? '';

  public createBook(book: Book): Observable<Response<Book>> {
    return this.http
      .post<Response<Book>>(`${this.API}/book`, book, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.utilsService.handleError));
  }

  public getBookById(id: string): Observable<Response<BookById>> {
    return this.http
      .get<Response<BookById>>(`${this.API}/book/${id}`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.utilsService.handleError));
  }

  public getBooks(): Observable<Response<Books>> {
    return this.http
      .get<Response<Books>>(`${this.API}/book`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.utilsService.handleError));
  }

  public deleteBook(id: string): Observable<Response<Book>> {
    return this.http
      .delete<Response<Book>>(`${this.API}/book/${id}`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.utilsService.handleError));
  }

  public updateBook(book: Book): Observable<Response<Book>> {
    return this.http
      .put<Response<Book>>(`${this.API}/book/${book._id}`, book, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.utilsService.handleError));
  }

  public searchBookByTitle(title: string): Observable<Response<Book>> {
    return this.http
      .get<Response<Book>>(`${this.API}/book/search/${title}`, {
        headers: {
          Authorization: this.token
        }
      })
      .pipe(catchError(this.utilsService.handleError));
  }

  public updateStatusBook(id: any, status: boolean): Observable<Response<Book>> {
    return this.http
      .put<Response<Book>>(
        `${this.API}/book/status/${id}`,
        { status },
        {
          headers: {
            Authorization: this.token
          }
        }
      )
      .pipe(catchError(this.utilsService.handleError));
  }
}
