import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Errors } from '@models/error.model';
import { User } from '@models/user.model';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private routerService = inject(Router);
  private userService = inject(UserService);
  private authService = inject(AuthService);

  public loginForm = this.fb.group({
    email: ['laurasusano@gmail.com', [Validators.required, Validators.email]],
    password: ['laura1234', [Validators.required, Validators.minLength(8)]]
  });

  login(): void {
    if (this.loginForm.invalid) {
      console.log('Invalid form');
      this.loginForm.markAllAsTouched;
    } else {
      console.log('Valid form');
      // TODO: Ir a la API y comprobar si el usuario existe, iniciar sesión, almacenar los datos del usuario y redireccionar a library
      this.authService.login();
      this.routerService.navigate(['/library']);
    }
  }

  register(): void {
    const user = this.loginForm.value as User;
    this.userService.createUser(user).subscribe((user: User | Errors) => {
      if ((user as Errors).errors) {
        const errors = (user as Errors).errors;
        errors.forEach((error) => {
          console.log(error.msg);
        });
      } else {
        alert(`Usuario creado ${JSON.stringify(user)}`);
      }
    });
  }
}
