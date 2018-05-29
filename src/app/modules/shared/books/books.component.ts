import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  @Input() books: Book[];
  @Input() bookId: number;
  @Input() buttonText: string;
  @Input() isBooksOverlayNeeded: boolean;

  @Output() selectedBook = new EventEmitter<object>();

  constructor(
    private modalService: ModalService,
  ) {}

  ngOnInit() {
    console.log(this.buttonText);
    console.log(this.isBooksOverlayNeeded);
  }

  /**
   * This method gets the details o a particular
   * book
   *
   * @param {any} bookId
   * @memberof BooksComponent
   */
  showBookDetails(bookId) {
    this.books.map((book) => {
      if (book.id === bookId) {
        this.selectedBook.emit(book);
      }
    });
  }

  /**
   * This method ensures opens the login modal when a user tries
   * to borrow one of the books on the trending page
   * without logging in
   *
   * @memberof TrendingBooksComponent
   *
   * @returns {void}
   */
  showLoginModal() {
    this.modalService.showModal(true, 1);
  }
}
