import { Injectable } from '@angular/core';
import { Response } from '@models/response.model';
import { Observable, of } from 'rxjs';

Injectable({
  providedIn: 'root'
});
export class UtilsService {
  public handleError(): Observable<Response<any>> {
    return of({ errors: [{ msg: 'Error desconocido' }] });
  }
}
