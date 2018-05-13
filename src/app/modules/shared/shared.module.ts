import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { ModalComponent } from './modal/modal.component';
import { LoginComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule
  ],
  declarations: [
    LoginComponent,
    ModalComponent,
    RegisterComponent],

  exports: [
    LoginComponent,
    ModalComponent,
    RegisterComponent,
  ]
})
export class SharedModule { }
