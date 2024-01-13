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

  public login(): void {
    console.log('Sesión iniciada');
    this.loggedInSubject.next(true);
  }

  public logout(): void {
    console.log('Sesión cerrada');
    this.loggedInSubject.next(false);
  }
}
