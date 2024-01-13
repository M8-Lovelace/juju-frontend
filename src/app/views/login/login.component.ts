import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LibraryService } from '@services/library.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public libraryService = inject(LibraryService);
  public authService = inject(AuthService);
  public routerService = inject(Router);

  goToLibraryView(): void {
    this.authService.login();
    this.routerService.navigate(['/library']);
  }

  goToLibraryViewWithoutLogin(): void {
    this.routerService.navigate(['/library']);
  }
}
