import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user.routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    UserRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
  UserPageComponent,
  LibraryPageComponent,
  ProfilePageComponent,
  HistoryPageComponent,
  DashboardPageComponent,
]
})
export class UserModule { }
