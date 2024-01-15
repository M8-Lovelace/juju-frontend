import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '@models/book.model';
import { Response } from '@models/response.model';
import { LibraryService } from '@services/library.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) book!: Book;
  @Output() delete = new EventEmitter();
  public routerService = inject(Router);
  public libraryService = inject(LibraryService);

  async onEdit(book: Book): Promise<void> {
    this.routerService.navigate(['/book/', book._id]);
  }

  onDelete(book: Book): void {
    console.log('Delete');
    this.libraryService.deleteBook(this.book._id!).subscribe((book) => {
      if ((book as Response<Book>).errors) {
        const errors = book.errors;
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
          title: 'Success',
          text: 'Book deleted!',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        this.delete.emit(true);
      }
    });
  }

  onChangeStatus(book: Book): void {
    console.log('Change status');
    this.libraryService.updateStatusBook(book._id, !book.status).subscribe((book) => {
      if ((book as Response<Book>).errors) {
        const errors = book.errors;
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
          title: 'Success',
          text: 'Book updated!',
          icon: 'success',
          confirmButtonText: 'Cool'
        });
        this.delete.emit(true);
      }
    });
  }
}
