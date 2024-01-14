import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Response } from '@models/response.model';
import { Login, User } from '@models/user.model';
import { AuthService } from '@services/auth.service';
import { UserService } from '@services/user.service';
import { UtilsService } from '@services/utils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  providers: [UserService, UtilsService],
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
      this.loginForm.markAllAsTouched;
    } else {
      const user = this.loginForm.value as User;
      this.userService.loginUser(user).subscribe((user) => {
        if ((user as Response<Login>).errors) {
          const errors = user.errors;
          errors?.forEach((error) => {
            Swal.fire({
              title: 'Error',
              text: error.msg,
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          });
        } else {
          Swal.fire({
            title: 'Welcome',
            text: 'You are logged in!',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          this.authService.login(user.data?.token);
          this.routerService.navigate(['/library']);
        }
      });
    }
  }

  register(): void {
    const user = this.loginForm.value as User;
    this.userService.createUser(user).subscribe((user) => {
      if ((user as Response<User>).errors) {
        const errors = user.errors;
        errors?.forEach((error) => {
          Swal.fire({
            title: 'Error',
            text: error.msg,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        });
      } else {
        Swal.fire({
          title: 'User created',
          text: 'Please log in',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
      }
    });
  }
}
