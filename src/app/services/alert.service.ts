import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AlertService {

  alertComponoent;
  confirmUserAction = new Subject<any>();

  /**
   * Register the alert element so that
   * we can have access to its properties
   *
   * @param {object} newComponent
   *
   * @memberof AlertService
   *
   * @returns {void}
   */
  registerComponent(newComponent) {
    this.alertComponoent = newComponent;
  }

  /**
   * This function passes the type  of alert to display and
   * the message to display to the alert component and then
   * displays the alert component
   *
   * @param {number} type
   * @param {string} message
   *
   * @memberof AlertService
   *
   * @returns {void}
   */
  showAlert(type: number, message: string) {
    this.alertComponoent.showAlert(type, message);
  }
}
