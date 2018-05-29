import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user.routing.module';
import { UserPageComponent } from './user-page/user-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';

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
  UserProfilePageComponent,
  HistoryPageComponent,
]
})
export class UserModule { }
