import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { PageNotFoundComponent } from './modules/shared/page-not-found/page-not-found.component';
import { FooterComponent } from './modules/shared/footer/footer.component';

import { SharedModule } from './modules/shared/shared.module';

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
      path: '',
      component: HomePageComponent
  },
  {
    path: 'user',
    loadChildren: './modules/user/user.module#UserModule',
    canActivate: [AuthGuardService]
  },

{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
