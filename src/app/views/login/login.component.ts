import { Component, OnInit, inject } from '@angular/core';
import { LibraryService } from '@services/library.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public libraryService = inject(LibraryService);

  ngOnInit(): void {
    console.log('LoginComponent: ngOnInit');
  }
}
