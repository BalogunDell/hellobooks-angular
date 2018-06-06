import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { BookTableType } from '../../../enums/books-table-type';
import { AlertService } from '../../../services/alert.service';
import { AlertType } from '../../../enums/alert-type';
@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  books = [];
  bookTableType = BookTableType;
  alertType = AlertType;
  tableHeaders = [
      'Book Image',
      'Title',
      'Author',
      'Date Borrowed',
      'Expected Return Date',
      'Action'
    ];

  constructor(
    private bookService: BooksService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.bookService.getBorrowedBooks()
      .toPromise()
      .then(
        apiResponse => {
          this.books = apiResponse.response.filter((book) => {
            return book.returnStatus === false;
          });
        })
        .catch(error => {
         this.alertService.showAlert(this.alertType.ERROR, error);
        }
      );
  }

}
