import { NgModule } from '@angular/core';
import { UserPageRoutingModule } from './user-page.routing.module';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    UserPageRoutingModule,
  ],

  declarations: [
    DashboardComponent,
  ]

})
export class UserPageModule { }
