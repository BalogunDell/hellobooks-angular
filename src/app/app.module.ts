import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BooksService } from './services/books.services.service';
import { TrendingBooksComponent } from './trending-books/trending-books.component';

@NgModule({
  declarations: [
    AppComponent,
    TrendingBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})

export class AppModule { }
