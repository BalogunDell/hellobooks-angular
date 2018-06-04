import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from '../../../services/books.service';
import { Book } from '../../../interfaces/book.interface';
import { AuthService } from '../../../services/auth.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.scss']
})
export class LibraryPageComponent implements OnInit {
  books = [];
  isLoading = false;
  buttonText = 'Details';

  constructor(
    private booksService: BooksService,
    private modalService: ModalService,
    private router: Router,

  ) {
  }

  ngOnInit() {
    this.getBooks();
  }


  getBooks() {
    this.isLoading = true;
    return this.booksService.getAllBooks()
      .subscribe(
        response => {
        this.isLoading = false;
        this.books = response.books;
      },
      error => {});
  }

  /**
   * Gets the id of the book that was
   * clicked on
   *
   * @param {number} event
   *
   * @memberof LibraryPageComponent
   */
  goToBookDetailsPage(event) {
    this.router.navigate(['/user/library/', event]);
  }
}
