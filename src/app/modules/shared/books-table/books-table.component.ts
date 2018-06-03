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
            this.books = this.books.filter((book: any) => {
                return book.id !== selectedBook.id;
              });
            this.alertService.showAlert(this.alertType.SUCCESS, response.message);
          },
        error => {
          this.alertService.showAlert(this.alertType.ERROR, error);
        }
      );
     }
    });
  }
}
