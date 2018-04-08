import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {  FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent],

  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
