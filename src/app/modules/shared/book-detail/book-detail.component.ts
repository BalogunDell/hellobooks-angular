import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,  } from '@angular/router';
import { Location } from '@angular/common';

import { BooksService } from '../../../services/books.service';
import { AlertService } from '../../../services/alert.service';
import { AlertType } from '../../../enums/alert-type';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  isBookDetailLoading;
  book: object;
  alertType = AlertType;
  isBorrowButtonEnable = true;
  navigateUserToHistoryPage = false;
  userRole;

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private alertService: AlertService,
    private authService: AuthService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.getBook(bookId);
    this.userRole = this.authService.decodeToken().role;
  }

  /**
   *This method gets a single book detail
   from the database
   *
   * @param {number} bookId
   *
   * @memberof BookDetailComponent
   */
  getBook(bookId) {
    this.isBookDetailLoading = true;
    this.bookService.getBook(bookId)
      .toPromise()
      .then(
        response => {
          this.book = response.payload;
          this.isBookDetailLoading = false;
        })
        .catch((error) => {
          this.alertService.showAlert(this.alertType.ERROR, error.message);
        }
      );
  }

  /**
   * This function allows a user borrow a book
   *
   * @param {number} bookId
   *
   * @memberof BookDetailComponent
   */
  borrowBook(bookId) {
    this.bookService.borrowBook(bookId)
      .toPromise()
      .then(response => {
          this.alertService.showAlert(this.alertType.SUCCESS, response.message);
          this.navigateUserToHistoryPage = true;
          this.isBorrowButtonEnable = false;
        })
        .catch(error => {
          this.alertService.showAlert(this.alertType.ERROR, error);
          this.isBorrowButtonEnable = false;
          }
      );
  }

  /**
   * This function returns users to
   * the libary page if they cannot borrow the
   * book they clicked on.
   *
   * @memberof BookDetailComponent
   */
  goBackToLibary() {
    this.location.back();
  }

  /**
   * This function takes the user to the
   * history page after they have successfully borrowed a book
   *
   * @memberof BookDetailComponent
   */
  gotToHistoryPage() {
    this.router.navigate(['/user/history']);
  }
}
