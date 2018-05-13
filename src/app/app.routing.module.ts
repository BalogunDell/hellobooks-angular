import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/first-section/first-section.component';
import { SharedModule } from './modules/shared/shared.module';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { TrendingBooksComponent } from './modules/home/trending-books/trending-books.component';
import { BookOfTheDayComponent } from './modules/home/book-of-the-day/book-of-the-day.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { CommonModule } from '@angular/common';
import { UserPageModule } from './modules/user-page/user-page.module';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'dashboard',
    loadChildren: './modules/user-page/user-page.module#UserPageModule'
  },
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    TrendingBooksComponent,
    BookOfTheDayComponent,
    FooterComponent,
  ],

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
