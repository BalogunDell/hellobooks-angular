import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';
import { BookTableType } from '../../../enums/books-table-type';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  allLibraryBooks = [];
  borrowedBooks = [];
  totalBooksCount = 0;
  totalBorrowedBooksCount = 0;
  totalReturnedBooksCount = 0;
  totalBooksNotReturnedCount = 0;
  bookTableType = BookTableType;
  tableHeaders = [
    'ISBN',
    'Book Cover',
    'Author',
    'Quantity',
    'Pages',
    'Date Borrowed',
    'Expected Return Date',
    'Action'
  ];

  constructor(
    private bookService: BooksService,
  ) {
  }

  ngOnInit() {
    this.getAllBorrowedBooks();
    this.getAllBooks();
  }

  /**
   * This method gets all the borrowed books so the admin
   * can know exactly what record statistics he/she has
   *
   * @memberof DashboardPageComponent
   */
  getAllBorrowedBooks() {
    this.bookService.getAllBorrowedBooks()
      .toPromise()
      .then(
        response => {
         this.totalBorrowedBooksCount = response.books.length;
         this.getBookStatistics(response.books);
          this.borrowedBooks = response.books;
        })
        .catch(error => {}
      );
  }

  /**
   * Thos method gets all the books in the application
   * and displays the count and also the books
   * in a tabular form
   *
   * @memberof DashboardPageComponent
   */
  getAllBooks() {
    this.bookService.getAllBooks()
      .toPromise()
      .then(
        response => {
          this.totalBooksCount = response.books.length;
          this.allLibraryBooks = response.books.map((book) => {
             book.category = book.Category.category;
             return book;
          });
        })
        .catch(error => {}
      );
  }

  /**
   * This method gets the count of
   * books not returned
   *
   * @param {any} books
   * @memberof DashboardPageComponent
   */
  getBookStatistics(books) {
     books.forEach(book => {
      if (book.returnStatus === false) {
       return this.totalBooksNotReturnedCount += 1;
      } else {
        this.totalReturnedBooksCount += 1;
      }
    });
  }

}
