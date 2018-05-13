import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../../../services/modal.service';
import { UserService } from '../../../services/user.service';

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
      .toPromise()
      .then((response) => {
       this.userService.setUserToken(response.responseData.token);
      })
      .catch((error) => {
        this.errorMessage = error.message;
        this.disableBtn = false;
      });
  }
  signUp() {
    this.modalService.showModal(true, 2);
  }
}
