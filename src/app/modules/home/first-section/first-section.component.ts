import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
})
export class FirstSectionComponent {

  constructor(
    private modalService: ModalService,
  ) { }

  showLoginModal() {
    this.modalService.showModal(true, 1);
  }

  showRegisterModal() {
    this.modalService.showModal(true, 2);
  }
}
