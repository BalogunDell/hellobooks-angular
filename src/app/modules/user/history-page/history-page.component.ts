import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

  books = [];
  tableHeaders = [
      'Book Image',
      'Book Title',
      'Author',
      'Date Borrowed',
      'Expected Return Date'
    ];

  constructor(
    private bookService: BooksService,
  ) { }

  ngOnInit() {
    this.bookService.getBorrowedBooks()
      .subscribe(
        response => {
          this.books = response;
        },
        error => {
          console.log(error);
        }
      );
  }

}
