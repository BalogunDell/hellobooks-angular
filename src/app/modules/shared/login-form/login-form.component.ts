import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from '../../../services/modal.service';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  disableBtn;
  errorMessage: string;

  constructor(
    private modalService: ModalService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  onSubmit() {
    this.disableBtn = true;
    this.userService.loginUser(this.loginForm.value)
      .subscribe(
        response => {
       this.authService.setUserToken(response.responseData.token);
       this.modalService.showModal(false, null);
       this.router.navigate(['/user/library']);
      },
      error => {
        this.errorMessage = error;
        this.disableBtn = false;
      });
  }
  signUp() {
    this.modalService.showModal(true, 2);
  }
}
