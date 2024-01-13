import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { Observable, map, of, tap } from 'rxjs';

export const checkAuthStatus: CanActivateFn = (route, state): Observable<boolean> => {
  const routerService = inject(Router);
  const authService = inject(AuthService);

  return authService.checkAuthentication().pipe(
    tap((isAuthenticated) => {
      console.log('está autenticado? ', isAuthenticated);
      if (state.url === '/login' && isAuthenticated) {
        console.log('cargó el login y estamos autenticados');
        routerService.navigate(['/library']);
      }
      if (state.url !== '/login' && !isAuthenticated) {
        console.log('cargó el library y no estamos autenticados');
        routerService.navigate(['/login']);
      }
    }),
    map((isAuthenticated) => true)
  );
};
