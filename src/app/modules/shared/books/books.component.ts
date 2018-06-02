import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Book } from '../../../interfaces/book.interface';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent {
  @Input() books: Book[];
  @Input() bookId: number;
  @Input() buttonText: string;
  @Input() isBooksOverlayNeeded: boolean;
  @Input() showModalOnButtonClick;

  @Output() selectedBook = new EventEmitter<object>();

  constructor(
    private modalService: ModalService,
  ) {}

  /**
   * This method gets the the id of the
   * book a user clicks on
   *
   * @param {number} bookId
   *
   * @memberof BooksComponent
   */
  getBookId(bookId) {
    this.selectedBook.emit(bookId);
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
    if (this.showModalOnButtonClick) {
      return this.modalService.showModal(true, 1);
    } else {
      return this.modalService.showModal(false, 1);
    }
  }
}
