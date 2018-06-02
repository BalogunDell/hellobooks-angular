import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './modules/shared/shared.module';

import { BooksService } from './services/books.service';
import { ModalService } from './services/modal.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { BaseService } from './services/base.service';
import { AuthService } from './services/auth.service';

import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { FirstSectionComponent } from './modules/home/first-section/first-section.component';
import { TrendingBooksComponent } from './modules/home/trending-books/trending-books.component';
import { BookOfTheDayComponent } from './modules/home/book-of-the-day/book-of-the-day.component';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    FirstSectionComponent,
    TrendingBooksComponent,
    BookOfTheDayComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    BaseService,
    BooksService,
    ModalService,
    UserService,
    AuthService,
    AuthGuardService,
    AlertService,

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
