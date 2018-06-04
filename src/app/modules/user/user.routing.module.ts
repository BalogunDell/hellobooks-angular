import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { BookDetailComponent } from '../shared/book-detail/book-detail.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: UserPageComponent,
  children: [
      {
        path: 'library',
        component: LibraryPageComponent,
      },

      {
        path: 'library/:id',
        component: BookDetailComponent,
      },

       {
         path: 'profile',
         component: ProfilePageComponent
       },

       {
        path: 'history',
        component: HistoryPageComponent
      },
      {
        path: 'dashboard',
        component: DashboardPageComponent,
      },

      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})

export class UserRoutingModule { }
