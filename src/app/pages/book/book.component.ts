import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardComponent } from '@components/card/card.component';
import { Book } from '@models/book.model';
import { LibraryService } from '@services/library.service';
import { UtilsService } from '@services/utils.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CardComponent, ReactiveFormsModule, CommonModule],
  providers: [LibraryService, UtilsService],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent implements OnInit {
  @Input() id!: string;
  private fb = inject(FormBuilder);
  private libraryService = inject(LibraryService);
  private routerService = inject(Router);
  public book = {} as Book;
  public editForm = this.fb.group({
    title: ['', [Validators.required]],
    author: ['', [Validators.required]],
    year: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.getBook();
  }

  goBack(): void {
    this.routerService.navigate(['/library']);
  }

  getBook(): void {
    this.libraryService.getBookById(this.id).subscribe((response) => {
      if (response.data) {
        this.book = response.data.book;
        this.editForm.setValue({
          title: this.book.title,
          author: this.book.author,
          year: this.book.year
        });
      } else {
        this.book = {} as Book;
      }
    });
  }

  editBook(): void {
    if (this.editForm.valid) {
      const book = this.editForm.value as Book;
      book._id = this.id;
      this.libraryService.updateBook(book).subscribe((book) => {
        if (book.errors) {
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
            text: 'Book updated successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
          this.routerService.navigate(['/library']);
        }
      });
    }
  }
}
