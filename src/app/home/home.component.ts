import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.services.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getTrendingBooks()
      .subscribe((response) => {
        console.log(response);
      });
  }

}
