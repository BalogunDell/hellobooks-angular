import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from './modules/shared/shared.module';


import { BooksService } from './services/books.service';
import { ModalService } from './services/modal.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    BooksService,
    ModalService,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
