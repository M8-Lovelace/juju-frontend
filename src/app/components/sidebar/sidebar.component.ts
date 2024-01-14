import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public authService = inject(AuthService);
  public routerService = inject(Router);

  @Output() onInputChangesEvent = new EventEmitter<string>();
  @ViewChild('input') input?: ElementRef<HTMLInputElement>;

  logout(): void {
    this.authService.logout();
    this.routerService.navigate(['/login']);
  }

  inputFocus(): void {
    this.input?.nativeElement.focus();
  }

  onInputChanges(event: any): void {
    this.onInputChangesEvent.emit(event.target.value);
  }
}
