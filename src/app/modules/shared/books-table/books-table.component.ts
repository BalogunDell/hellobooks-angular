import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { BookTableType } from '../../../enums/books-table-type';
import { AlertService } from '../../../services/alert.service';
import { AlertType } from '../../../enums/alert-type';
import { BooksService } from '../../../services/books.service';
@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  styleUrls: ['./books-table.component.scss']
})
export class BooksTableComponent {

  @Input() books: object[];
  @Input() tableHeaders;
  @Input() tableType;

  alertType = AlertType;
  bookTableType = BookTableType;
  isReturnButtonEnabled = true;

  constructor(
    private alertService: AlertService,
    private bookService: BooksService
  ) { }

  deleteBook(selectedBook) {
    this.alertService.showAlert(
      this.alertType.CONFIRMATION,
      'Are you sure you want to delete this book?');

    this.alertService.confirmUserAction.subscribe((event) => {
     if (event) {
       this.bookService.deleteBook(selectedBook.id)
        .subscribe(
          response => {
            this.books = this.updateBooks(this.books, selectedBook);
            this.alertService.showAlert(this.alertType.SUCCESS, response.message);
          },
        error => {
          this.alertService.showAlert(this.alertType.ERROR, error);
        }
      );
     }
    });
  }
  /**
   * This function confirms if a user wants to return a book
   * and it acts on the response on of the user
   * by either making an api call to return the
   * book or cancelling the action and closing the alert
   *
   * @param {number} bookId
   * @memberof BooksTableComponent
   */
  returnBook(bookId) {
    this.alertService.showAlert(
      this.alertType.CONFIRMATION,
      'Are you sure you want to return this book?');
      this.alertService.confirmUserAction.subscribe((event) => {
        if (event) {
          this.bookService.returnBook(bookId)
            .subscribe(
              response => {
                this.isReturnButtonEnabled = false;
                this.alertService.showAlert(this.alertType.SUCCESS, response.message);
              },
              error => {
                this.alertService.showAlert(this.alertType.ERROR, error);
              }
            );
        }
      });
  }

  /**
   * This function updates the UI by filtering
   * through the books and removing the one
   * that has been returned from the table
   *
   * @param {any} books
   * @param {any} selectedBook
   * @memberof BooksTableComponent
   */
  updateBooks(books, selectedBook) {
    return books.filter((book: any) => {
      return book.id !== selectedBook.id;
    });
  }
}
