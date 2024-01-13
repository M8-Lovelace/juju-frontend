import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';
import { LibraryService } from '@services/library.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public libraryService = inject(LibraryService);
  private fb = inject(FormBuilder);
  public authService = inject(AuthService);
  public routerService = inject(Router);

  public login = this.fb.group({
    email: ['laurasusano@gmail.com', [Validators.required, Validators.email]],
    password: ['laura1234', [Validators.required, Validators.minLength(8)]]
  });

  onSave(): void {
    if (this.login.invalid) {
      console.log('Invalid form');
      this.login.markAllAsTouched;
    } else {
      console.log('Valid form');
      this.authService.login();
      this.routerService.navigate(['/library']);
    }
  }
}
