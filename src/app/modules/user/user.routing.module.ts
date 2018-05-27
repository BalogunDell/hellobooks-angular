import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page/user-page.component';
import { LibraryPageComponent } from './library-page/library-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

const routes: Routes = [
  { path: '', component: UserPageComponent,
  children: [
      {
        path: 'library',
        component: LibraryPageComponent,
      },
       {
         path: 'profile',
         component: UserProfilePageComponent
       }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})

export class UserRoutingModule { }
