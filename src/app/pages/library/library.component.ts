import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from '@components/card/card.component';
import { Book } from '@models/book.model';
import { LibraryService } from '@services/library.service';
import { UtilsService } from '@services/utils.service';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [SidebarComponent, CommonModule, CardComponent],
  providers: [LibraryService, UtilsService],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {
  private libraryService = inject(LibraryService);
  public routerService = inject(Router);
  private booksBackup: Book[] = [];
  public books: Book[] = [];

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.libraryService.getBooks().subscribe((response) => {
      if (response.data) {
        this.books = response.data.books;
        this.booksBackup = response.data.books;
      } else {
        this.books = [];
        this.booksBackup = [];
      }
    });
  }

  onInputChanges(event: string): void {
    if (event) {
      this.books = this.booksBackup.filter((book) => {
        return book.title.toLowerCase().includes(event.toLowerCase());
      });
    } else {
      this.books = this.booksBackup;
    }
  }

  reloadBook(event: Book): void {
    this.getBooks();
  }

  goToCreateBook(): void {
    this.routerService.navigate(['/create']);
  }
}
