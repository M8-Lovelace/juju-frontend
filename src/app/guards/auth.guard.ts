import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable, map, tap } from 'rxjs';

export const checkAuthStatus: CanActivateFn = (route, state): Observable<boolean> => {
  const routerService = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      if (state.url === '/login' && isAuthenticated) {
        routerService.navigate(['/library']);
      }
      if (state.url !== '/login' && !isAuthenticated) {
        routerService.navigate(['/login']);
      }
    }),
    map((isAuthenticated) => true)
  );
};
