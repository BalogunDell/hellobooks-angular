import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../services/user.service';
import { ModalService } from '../../../services/modal.service';
import { AlertService } from '../../../services/alert.service';
import { AlertType } from '../../../enums/alert-type';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  editProfileForm: FormGroup;
  userInfo: object;
  isLoadingUserData: boolean;
  showEditProfileForm: boolean;
  alertType = AlertType;

  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.isLoadingUserData = true;
    this.showEditProfileForm = false;
    this.getUserDetail();
  }

  /**
   * This function takes in userData, creates the form
   * and popluates the form with it
   *
   * @param {any} userData
   * @memberof ProfilePageComponent
   */
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
/**
 * This function gets the details of the
 * user.
 *
 * @memberof ProfilePageComponent
 */
getUserDetail() {
    this.userService.getUser()
      .subscribe(
        response => {
          this.userInfo = response.userData;
          this.isLoadingUserData = false;
        },
        error => {}
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
         this.alertService.showAlert(this.alertType.SUCCESS, 'Profile successfully updated.');
        },
        error => {
          this.alertService.showAlert(this.alertType.ERROR, error);
        }
      );
  }
}
