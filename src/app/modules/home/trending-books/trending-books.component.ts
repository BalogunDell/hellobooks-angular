import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-trending-books',
  templateUrl: './trending-books.component.html',
  styleUrls: ['./trending-books.component.scss']
})
export class TrendingBooksComponent implements OnInit {
  trendingBooks = [];
  loading = true;
  constructor(
    private bookService: BooksService,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.bookService.getTrendingBooks()
      .toPromise()
      .then((response) => {
        this.loading = false;
        this.trendingBooks = response.trendingBooks;
      })
      .catch((error) => {
      });
  }
}
