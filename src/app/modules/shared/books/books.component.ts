import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() books: Book[];
  @Input() bookId: number;
  @Input() buttonText: string;
  @Input() showBookOverlay: boolean;

  @Output() selectedBook = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {
    console.log(this.buttonText);
    console.log(this.showBookOverlay);
  }
  showBookDetails(bookId) {
    this.books.map((book) => {
      if (book.id === bookId) {
        this.selectedBook.emit(book);
      }
    });
  }
}
