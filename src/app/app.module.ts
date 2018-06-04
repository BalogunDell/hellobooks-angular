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
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { FirstSectionComponent } from './modules/home/first-section/first-section.component';
import { TrendingBooksComponent } from './modules/home/trending-books/trending-books.component';
import { BookOfTheDayComponent } from './modules/home/book-of-the-day/book-of-the-day.component';
import { AlertService } from './services/alert.service';

import { HeaderInterceptor } from './interceptors/header-Interceptor';
// FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
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
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
