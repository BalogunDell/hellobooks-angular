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

userInfo: object;
componentType = ComponentType;
registerForm: FormGroup;
errorMessage: string;
disableBtn: boolean;

  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

createForm() {
  this.registerForm = this.formBuilder.group({
    firstName: ['',  [Validators.required, Validators.pattern(/[^0-9]/)]],
    lastName: ['', [ Validators.required, Validators.pattern(/[^0-9]/)]],
    username: ['', [Validators.required, Validators.pattern(/[^0-9]/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [ Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [ Validators.required, Validators.minLength(6)]],
  });
}

 register() {
   console.log(this.registerForm);
   console.log(this.registerForm.value);

   if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
     this.errorMessage = 'Passwords do not match!';
     return;
    }

    this.userService.createUser(this.registerForm.value)
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
