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
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { FusionChartsModule } from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);
@NgModule({
  imports: [
    UserRoutingModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    FusionChartsModule,
  ],
  declarations: [
  UserPageComponent,
  LibraryPageComponent,
  UserProfilePageComponent,
  HistoryPageComponent,
  DashboardPageComponent,
  BookPageComponent,
]
})
export class UserModule { }
