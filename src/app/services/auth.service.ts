import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  public checkAuthentication(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  public login(token: any): void {
    console.log('Sesión iniciada');
    sessionStorage.clear();
    sessionStorage.setItem('token', token);
    this.loggedInSubject.next(true);
  }

  public logout(): void {
    console.log('Sesión cerrada');
    sessionStorage.removeItem('token');
    this.loggedInSubject.next(false);
  }
}
