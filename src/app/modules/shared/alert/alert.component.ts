import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../../services/alert.service';
import { AlertType } from '../../../enums/alert-type';
import { timer } from 'rxjs/observable/timer';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {

  message: string;
  isAlertNeeded: boolean;
  typeOfAlert: number;
  alertType = AlertType;
  alertSubscrption;
  isConfirmOrCancelButtonEnabled;

  constructor(
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.alertService.registerComponent(this);
  }

  showAlert(typeOfAlert: number, message: string) {
    this.isAlertNeeded = true;
    this.isConfirmOrCancelButtonEnabled = true;
    this.message = message;
    this.typeOfAlert = typeOfAlert;
    if (typeOfAlert !== this.alertType.CONFIRMATION) {
     return this.removeAlert(3000);
    }
  }

  /**
   * Emits a boolean to indicate that
   * a user has confirmed an action
   *
   * @param {boolean} event
   *
   * @memberof AlertComponent
   */
  confirmAction(event) {
    this.isConfirmOrCancelButtonEnabled = false;
    this.alertService.confirmUserAction.next(event);
    this.removeAlert(1);
  }

  /**
   * Takes away the modal when user clicks on
   * cancel button
   *
   * @memberof AlertComponent
   */
  cancelAction() {
    this.isConfirmOrCancelButtonEnabled = false;
    this.removeAlert(1);
  }

  ngOnDestroy() {
    this.alertSubscrption.unsubcribe();
  }

  /**
   * Takes away the alert from the screen
   *
   * @memberof AlertComponent
   */
  removeAlert(duration) {
    const timerInstance = timer(duration);
    this.alertSubscrption = timerInstance.subscribe(() => {
     this.isAlertNeeded = false;
   });
  }
}
