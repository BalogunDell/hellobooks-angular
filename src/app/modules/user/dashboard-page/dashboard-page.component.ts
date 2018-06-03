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

  getAllBorrowedBooks() {
    this.bookService.getAllBorrowedBooks()
      .subscribe(
        response => {
         this.totalBorrowedBooksCount = response.books.length;
         this.getBookStatistics(response.books);
        },
        error => {}
      );
  }

  getAllBooks() {
    this.bookService.getAllBooks()
      .subscribe(
        response => {
          this.totalBooksCount = response.books.length;
          this.allLibraryBooks = response.books.map((book) => {
             book.category = book.Category.category;
             return book;
          });
        },
        error => {}
      );
  }

  getBookStatistics(books) {
     books.forEach(book => {
      if (book.returnStatus === false) {
       return this.totalBooksNotReturnedCount += 1;
      } else {
        this.totalBooksNotReturnedCount += 1;
      }
    });
  }

}
