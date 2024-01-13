import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LibraryService } from '@services/library.service';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  public libraryService = inject(LibraryService);
  public authService = inject(AuthService);
  public routerService = inject(Router);

  logout(): void {
    this.authService.logout();
    this.routerService.navigate(['/login']);
  }
}
