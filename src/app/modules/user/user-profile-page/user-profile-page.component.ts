import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  userInfo: object;
  isLoadingUserData: boolean;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.isLoadingUserData = true;
    this.userService.getUser()
      .subscribe(
        response => {
          this.userInfo = response.userData;
          this.isLoadingUserData = false;
        },
        error => console.log(error)
      );
  }

}
