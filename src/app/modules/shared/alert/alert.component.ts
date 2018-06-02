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

  constructor(
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.alertService.registerComponent(this);
  }

  showAlert(typeOfAlert: number, message: string) {
    this.isAlertNeeded = true;
    this.message = message;
    this.typeOfAlert = typeOfAlert;
    const timerInstance = timer(3000);
     this.alertSubscrption = timerInstance.subscribe(() => {
      this.isAlertNeeded = false;
    });
  }

  ngOnDestroy() {
    this.alertSubscrption.unsubcribe();
  }
}
