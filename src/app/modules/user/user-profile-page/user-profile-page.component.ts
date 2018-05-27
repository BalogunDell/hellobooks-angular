import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  editProfileForm: FormGroup;
  userInfo: object;
  isLoadingUserData: boolean;
  showEditProfileForm: boolean;
  errorMessage: string;

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.isLoadingUserData = true;
    this.showEditProfileForm = false;
    this.getUserDetail();
  }

  createForm(userData) {
    this.editProfileForm = this.formBuilder.group({
      firstName: [userData.firstName,
        [
          Validators.required,
          Validators.pattern(/[^0-9]/i)
        ]
      ],
      lastName: [userData.lastName,
        [ Validators.required,
          Validators.pattern(/[^0-9]/i)
        ]
      ],
      username: [userData.username,
        [
          Validators.required,
          Validators.pattern(/[^0-9]/i)
        ]
      ],
    });
  }

  getUserDetail() {
    this.userService.getUser()
      .subscribe(
        response => {
          this.userInfo = response.userData;
          this.isLoadingUserData = false;
        },
        error => console.log(error)
      );
  }
  /**
   * This method creates the profile update form
   * and it shows it
   *
   * @memberof UserProfilePageComponent
   *
   * @returns {void}
   */
  createAndShowEditForm() {
    this.createForm(this.userInfo);
    this.showEditProfileForm = true;
  }

  /**
   * This method cancels profile edit action
   *
   * @memberof UserProfilePageComponent
   *
   * @returns {void}
   */
  cancelProfileEdit() {
    this.showEditProfileForm = false;
  }

  /**
   * This method updates user data and returns to the profile page
   *
   * @memberof UserProfilePageComponent
   *
   * @returns {void}
   */
  updateProfile() {
    this.userService.updateProfile(this.editProfileForm.value)
      .subscribe(
        response => {
         this.userInfo = response.user;
         this.showEditProfileForm = false;
        },
        error => {
         this.errorMessage = error;
        }
      );
  }

  editPassword() {
  }
}
