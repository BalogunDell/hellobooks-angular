import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { ModalService } from '../../../services/modal.service';
import { ComponentType } from '../../../enums/component-type.enum';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterComponent implements OnInit {

@Input() isComponentRegisterType: boolean;

componentType = ComponentType;
registerOrEditProfileForm: FormGroup;
errorMessage: string;
disableBtn: boolean;

  constructor(
    private modalService: ModalService,
    private userSercvice: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.isComponentRegisterType = this.componentType.REGISTER === 2;
    this.createForm();
  }

createForm() {
  this.registerOrEditProfileForm = this.formBuilder.group({
    firstName: ['',  [Validators.required, Validators.pattern(/[^0-9]/i)]],
    lastName: ['', [ Validators.required, Validators.pattern(/[^0-9]/i)]],
    username: ['', [Validators.required, Validators.pattern(/[^0-9]/i)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [ Validators.required, Validators.minLength(6)]],
  });
}

 register() {
   if (this.registerOrEditProfileForm.value.password !== this.registerOrEditProfileForm.value.confirmPassword) {
     this.errorMessage = 'Passwords do not match!';
     return;
    }

    this.userSercvice.createUser(this.registerOrEditProfileForm.value)
    .subscribe(
      response => {
        this.authService.setUserToken(response.responseData.token);
        this.modalService.showModal(false, null);
        this.router.navigate(['/user/library']);
      },
    error => {
      this.errorMessage = error;
      this.disableBtn = false;
    }
  );
 }
}
