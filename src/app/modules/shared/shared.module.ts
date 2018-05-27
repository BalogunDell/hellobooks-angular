import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register-form/register-form.component';
import { DashboardNavigationComponent } from './dashboard-navigation/dashboard-navigation.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LoginComponent,
    ModalComponent,
    RegisterComponent,
    DashboardNavigationComponent,
    DashboardHeaderComponent,
    FooterComponent,
    BooksComponent,
    BookDetailComponent,
  ],

  exports: [
    LoginComponent,
    ModalComponent,
    RegisterComponent,
    DashboardNavigationComponent,
    DashboardHeaderComponent,
    FooterComponent,
    BooksComponent
  ]
})
export class SharedModule { }
