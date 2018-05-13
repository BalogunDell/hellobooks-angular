import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
      path: '',
      component: DashboardComponent
  },
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)],
})
export class UserPageRoutingModule { }
